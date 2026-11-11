const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const submitButton = document.querySelector("#search-submit");
const statusMessage = document.querySelector("#search-status");
const resultsCard = document.querySelector("#results-card");
const resultsCount = document.querySelector("#results-count");
const resultsList = document.querySelector("#results-list");

const numberFormatter = new Intl.NumberFormat("pt-BR");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  searchRepositories(input.value.trim());
});

async function searchRepositories(query) {
  if (!query) {
    input.focus();
    return;
  }

  input.disabled = true;
  submitButton.disabled = true;
  resultsCard.hidden = true;
  resultsList.replaceChildren();
  resultsCount.textContent = "";
  setStatus("Buscando repositórios...", "loading");

  const searchParams = new URLSearchParams({
    q: query,
    sort: "stars",
    page: "1",
    per_page: "10",
  });

  try {
    const response = await fetch(
      `https://api.github.com/search/repositories?${searchParams.toString()}`,
      { headers: { Accept: "application/vnd.github+json" } },
    );

    if (!response.ok) {
      throw new Error(`A API do GitHub respondeu com o status ${response.status}.`);
    }

    const data = await response.json();

    if (!Array.isArray(data.items)) {
      throw new Error("A resposta da API não contém uma lista de repositórios.");
    }

    if (data.items.length === 0) {
      setStatus("Nenhum repositório encontrado. Tente outro termo de busca.", "empty");
      return;
    }

    resultsList.replaceChildren(...data.items.map(createRepositoryCard));
    resultsCount.textContent = `${numberFormatter.format(data.total_count)} encontrados`;
    resultsCard.hidden = false;
    setStatus("", "");
  } catch (error) {
    console.error("Não foi possível buscar repositórios no GitHub:", error);
    setStatus(
      "Não foi possível carregar os repositórios agora. Verifique sua conexão e tente novamente.",
      "error",
    );
  } finally {
    input.disabled = false;
    submitButton.disabled = false;
  }
}

function createRepositoryCard(repository) {
  const item = document.createElement("li");
  item.className = "repository";

  const header = document.createElement("div");
  header.className = "repository-header";

  const avatar = document.createElement("img");
  avatar.className = "owner-avatar";
  avatar.src = repository.owner.avatar_url;
  avatar.alt = `Foto de ${repository.owner.login}`;
  avatar.loading = "lazy";

  const identity = document.createElement("div");
  identity.className = "repository-identity";

  const ownerName = document.createElement("div");
  ownerName.className = "owner-name";
  ownerName.textContent = repository.owner.login;

  const link = document.createElement("a");
  link.className = "repository-link";
  link.href = repository.html_url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = repository.full_name;
  link.setAttribute("aria-label", `Abrir o repositório ${repository.full_name} em uma nova aba`);

  identity.append(ownerName, link);
  header.append(avatar, identity);

  const description = document.createElement("p");
  description.className = "repository-description";
  description.textContent = repository.description || "Este repositório não possui descrição.";

  if (!repository.description) {
    description.classList.add("is-empty");
  }

  const metadata = document.createElement("p");
  metadata.className = "repository-meta";

  const language = createMetadataItem("Linguagem:", repository.language || "Não informada");
  const stars = createMetadataItem(
    "Estrelas:",
    numberFormatter.format(repository.stargazers_count),
  );

  metadata.append(language, stars);
  item.append(header, description, metadata);

  return item;
}

function setStatus(message, state) {
  statusMessage.textContent = message;

  if (state) {
    statusMessage.dataset.state = state;
  } else {
    delete statusMessage.dataset.state;
  }
}

function createMetadataItem(label, value) {
  const item = document.createElement("span");
  const heading = document.createElement("strong");
  heading.textContent = label;
  item.append(heading, ` ${value}`);
  return item;
}
