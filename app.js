const app = document.getElementById("app");

const products = [
  // Cervejas
  { id: 1, name: "Cerveja Skol Lata 350ml", price: 3.5, category: "Cerveja", img: '<img src="https://choppbrahmaexpress.vtexassets.com/arquivos/ids/157312-800-auto?v=638842261015830000&width=800&height=auto&aspect=true" alt="Skol">' },
  { id: 2, name: "Cerveja Amstel Lata 350ml", price: 3.59, category: "Cerveja", img: '<img src="https://paulistaoatacadista.vtexassets.com/arquivos/ids/356377-800-auto?v=638369480219570000&width=800&height=auto&aspect=true" alt="Amstel">' },
  { id: 3, name: "Cerveja Heineken Long Neck 330ml", price: 7.5, category: "Cerveja", img: '<img src="https://taqueriatacomex.com.br/wp-content/uploads/2020/05/cerveja-heineken.png" alt="Heineken">' },
  { id: 4, name: "Cerveja Itaipava Lata 350ml", price: 2.59, category: "Cerveja", img: '<img src="https://prezunic.vtexassets.com/arquivos/ids/212214-800-auto?v=638729688693070000&width=800&height=auto&aspect=true" alt="Itaipava">' },
  { id: 5, name: "Cerveja Corona 355ml", price: 12.5, category: "Cerveja", img: '<img src="https://images.tcdn.com.br/img/img_prod/991424/cerveja_corona_355ml_645_1_079ca8919664c8772e8a1988a12e32da.png" alt="Corona">' },

  // Whiskys e Destilados
  { id: 6, name: "Johnnie Walker Red Label 1L", price: 95.9, category: "Whiskys e Destilados", img: '<img src="https://cdn.sistemawbuy.com.br/arquivos/f0d0016a15326921262a484eb0cb1b24/produtos/66395a45684c8/redlabel1lt-570x570-66395a45af660.png" alt="Johnnie Red">' },
  { id: 7, name: "White Horse 1L", price: 89.9, category: "Whiskys e Destilados", img: '<img src="https://cdn.sistemawbuy.com.br/arquivos/f0d0016a15326921262a484eb0cb1b24/produtos/66395906ce7a7/whisky-white-horse-570x570-663959071de9d.jpg" alt="White Horse">' },
  { id: 8, name: "Ballantine\'s Finest 1L", price: 106.5, category: "Whiskys e Destilados", img: '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYtXqbZgoHSXzPcYIgz_axEW2rGwevbPaCBA&s" alt="Ballantine">' },
  { id: 9, name: "Old Parr 12 anos 1L", price: 115.99, category: "Whiskys e Destilados", img: '<img src="https://cdn.dooca.store/110243/products/0zp4wubpfcowmgwyp8eqbpoc3tpxheihgsi4_640x640+fill_ffffff.png?v=1693933129&webp=0" alt="Old Parr">' },
  { id: 10, name: "Jack Daniel\'s Maçã Verde", price: 119.90, category: "Whiskys e Destilados", img: '<img src="https://prezunic.vtexassets.com/arquivos/ids/193508/6568d7ebe1d9f5b4beb96161.jpg?v=638369666389970000" alt="Jack Apple">' },
  { id: 11, name: "Jack Daniel\'s Fire (Canela)", price: 129.9, category: "Whiskys e Destilados", img: '<img src="https://images.tcdn.com.br/img/img_prod/774261/whisky_jack_daniels_fire_1000ml_2209_1_23032539f12713372356884b4d7b36b3.jpg" alt="Jack Fire">' },
  { id: 12, name: "Licor 43 Original 700ml", price: 116.45, category: "Whiskys e Destilados", img: '<img src="https://acdn-us.mitiendanube.com/stores/005/108/528/products/licor-43-original-fe01589ae0a14bb86f17249602991653-1024-1024.png" alt="Licor 43 Original">' },
  { id: 13, name: "Licor 43 Chocolate 700ml", price: 189.9, category: "Whiskys e Destilados", img: '<img src="https://cdn.sistemawbuy.com.br/arquivos/f0d0016a15326921262a484eb0cb1b24/produtos/663bc90f51463/licor43-chocolate-926x926-663bc90f81bf5.png" alt="Licor 43 Chocolate">' },
  { id: 14, name: "Licor Ballena Original 750ml", price: 175.5, category: "Whiskys e Destilados", img: '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsjDt4M3HhvnfDKQueDnY0IvPAfuu23ptag&s" alt="Licor Ballena">' },
  { id: 15, name: "Licor Ballena Caramelo e Chocolate", price: 225.9, category: "Whiskys e Destilados", img: '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPMSbp1GONWv4nMKUPCH781I6zzqbgUNAmg&s" alt="Licor Ballena Caramelo">' },
  { id: 22, name: "Gin Tanqueray 1L", price: 120, category: "Whiskys e Destilados", img: '<img src="https://diageo.vtexassets.com/arquivos/ids/164543/724986---GIN-TANQUERAY-LONDON-DRY---750ml_1.png?v=638386098017870000" alt="Gin Tanqueray">' },

  // Energéticos
  { id: 16, name: "Red Bull Tradicional 250ml", price: 10.5, category: "Energéticos", img: '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQljWqiLXv17x1a4V4srq6xPhOy3IdOND2BQ&s" alt="Red Bull Tradicional">' },
  { id: 17, name: "Red Bull Tropical 355ml", price: 14.5, category: "Energéticos", img: '<img src="https://i0.wp.com/e-cafeecachaca.com.br/wp-content/uploads/2024/07/15286526685_redbull-tropical.png?fit=622%2C622&ssl=1" alt="Red Bull Tropical">' },
  { id: 18, name: "Baly Tradicional 2L", price: 11.9, category: "Energéticos", img: '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxUzv7xFoW1r-8YvkMTlPzohU-WYCGdjnYA&s" alt="Baly Tradicional">' },
  { id: 19, name: "Baly Morango e Pêssego 2L", price: 11.6, category: "Energéticos", img: '<img src="https://destro.fbitsstatic.net/img/p/energetico-baly-sabor-morango-e-pessego-2l-89010/276008.jpg?w=500&h=500&v=202501231555&qs=ignore" alt="Baly Pêssego">' },
  { id: 20, name: "Baly Maçã Verde 2L", price: 15.3, category: "Energéticos", img: '<img src="https://www.imigrantesbebidas.com.br/bebida/images/products/full/88743-energetico-baly-maca-verde-2l.jpg" alt="Baly Maçã Verde">' },
  { id: 21, name: "Enerup 2L", price: 18, category: "Energéticos", img: '<img src="https://mercantilatacado.vtexassets.com/arquivos/ids/172166-800-auto?v=638349583722470000&width=800&height=auto&aspect=true" alt="Enerup">' },
  { id: 23, name: "Red Bull Red Edition 250ml", price: 12.7, category: "Energéticos", img: '<img src="https://drogariasp.vteximg.com.br/arquivos/ids/677451-1000-1000/608505---energetico-red-bull-red-edition-cranberry-250ml.jpg?v=637908228415600000" alt="Red Bull Red Edition">' }
];

let cart = [];
let user = null;
let route = "login";
let activeFilter = "Todos";

function render() {
  app.innerHTML = "";

  const header = document.createElement("header");
  header.innerHTML = `
    <h1>Adega dos 7</h1>
    <div>
      ${user ? `<span>🍻 Olá, ${user} | </span><button onclick="logout()">Sair</button>` : ""}
      <button onclick="goTo('catalog')">Catálogo</button>
      <button onclick="goTo('checkout')">Carrinho (${cart.length})</button>
    </div>
  `;
  app.appendChild(header);

  const container = document.createElement("div");
  container.className = "container";

  if (route === "login") {
    container.innerHTML = `
      <h2>Login</h2>
      <input id="username" placeholder="Digite seu nome">
      <button onclick="login()">Entrar</button>
    `;
  }

  if (route === "catalog") {
    container.innerHTML = "<h2>Catálogo</h2>";

    const categories = ["Todos", ...new Set(products.map(p => p.category))];
    const filterDiv = document.createElement("div");
    filterDiv.className = "filter";
    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.textContent = cat;
      btn.className = cat === activeFilter ? "active" : "";
      btn.onclick = () => { activeFilter = cat; render(); };
      filterDiv.appendChild(btn);
    });
    container.appendChild(filterDiv);

    const grid = document.createElement("div");
    grid.className = "grid";
    products
      .filter(p => activeFilter === "Todos" || p.category === activeFilter)
      .forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          ${p.img}
          <h3>${p.name}</h3>
          <p>R$ ${p.price.toFixed(2)}</p>
          <button onclick="addToCart(${p.id})">Adicionar</button>
        `;
        grid.appendChild(card);
      });
    container.appendChild(grid);
  }

  if (route === "checkout") {
    container.innerHTML = "<h2>Carrinho</h2>";
    const cartDiv = document.createElement("div");
    cartDiv.className = "cart";

    if (cart.length === 0) {
      cartDiv.innerHTML = "<p>Seu carrinho está vazio</p>";
    } else {
      cart.forEach(item => {
        const row = document.createElement("div");
        row.className = "cart-item";
        row.innerHTML = `
          <span>${item.name} (x${item.qty})</span>
          <span>R$ ${(item.price * item.qty).toFixed(2)}</span>
          <button onclick="removeFromCart(${item.id})">Remover</button>
        `;
        cartDiv.appendChild(row);
      });

      const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
      cartDiv.innerHTML += `<h3>Total: R$ ${total.toFixed(2)}</h3>`;
      cartDiv.innerHTML += `
        <div class="checkout">
          <h4>Dados do Cartão</h4>
          <input placeholder="Nome no cartão">
          <input placeholder="Número do cartão">
          <input placeholder="MM/AA">
          <input placeholder="CVV">
          <button onclick="finalizeOrder()">Finalizar Compra</button>
        </div>
      `;
    }
    container.appendChild(cartDiv);
  }

  app.appendChild(container);
}

function goTo(r) { route = r; render(); }
function login() {
  const username = document.getElementById("username").value;
  if (username.trim()) { user = username; goTo("catalog"); }
  else { alert("Digite um nome!"); }
}
function logout() { user = null; route = "login"; render(); }
function addToCart(id) {
  const prod = products.find(p => p.id === id);
  const item = cart.find(i => i.id === id);
  if (item) { item.qty++; } else { cart.push({ ...prod, qty: 1 }); }
  render();
}
function removeFromCart(id) { cart = cart.filter(i => i.id !== id); render(); }
function finalizeOrder() { alert("🍾 Compra finalizada!"); cart = []; goTo("catalog"); }

render();
