function esperarAuthPronto(callback) {
  if (window.authPronto) {
    callback();
  } else {
    setTimeout(() => esperarAuthPronto(callback), 30);
  }
}

esperarAuthPronto(() => {
  console.log("✅ produto.js iniciado após auth.js");
  iniciarProdutoJS();
});

function iniciarProdutoJS() {
// Array com todos os produtos
const produtos = [
  {
    nome: "Suporte Magnético",
    preco: 1200.00,
    imagem: "imagem/produto/Suporte_Magnetico.webp",
    descri: "suporte Magnético para Celula para colocar em veículos fáceis uso."
  },
  {
    nome: "Air max",
    preco: 3500.00,
    imagem: "imagem/produto/Air_max.webp",
    descri: "air max Nike, sapatos confortáveis, refrescante."
  },
  {
    nome: "Pasta da Nike",
    preco: 2300.00,
    imagem: "imagem/produto/bag_nike.webp",
    descri: "pasta da Nike para uso escolar, caminhada e trabalho."
  },
  {
    nome: "Cafeteira Expresso",
    preco: 21000.00,
    imagem: "imagem/produto/cafeteira_expresso.webp",
    descri: "melhor cafeteira para uso no dia a dia em casa e na empresa, rápida e simples de usar."
  },
  {
    nome: "Cafeteira de Goteo",
    preco: 19000.00,
    imagem: "imagem/produto/cafeteira.webp",
    descri: "Cafeteira de Goteo EKF3300, simples uso, para usar em casa."
  },
  {
    nome: "Caixa de Som Bluetooth",
    preco: 6500.00,
    imagem: "imagem/produto/Caixa_de_Som.webp",
    descri: "Caixa de Som Bluetooth, Portátil amplificador Led RGB bluetooth 5000mAh."
  },
  {
    nome: "Caixa de Som Bluetooth speaker",
    preco: 7200.00,
    imagem: "imagem/produto/Caixa_speaker.webp",
    descri: "Caixa de Som Bluetooth Portátil speaker, suporta microfone, 6500mAh."
  },{
    nome: "Boné Creme",
    preco: 1100.00,
    imagem: "imagem/produto/bone_creme.webp",
    descri: "Boné Creme da New York, ajustável e confortável."
  },{
    nome: "Boné da Lacoste",
    preco: 1250.00,
    imagem: "imagem/produto/bone_Lacoste.webp",
    descri: "Boné Lacoste, ajustável e confortável, quatro cores vermelho, laranja, preto e branco."
  },{
    nome: "Boné Nike",
    preco: 1150.00,
    imagem: "imagem/produto/bone_Nike.webp",
    descri: "Boné da Nike, ajustável e confortável diferentes tipos de cores."
  },{
    nome: "Boné Preto",
    preco: 800.00,
    imagem: "imagem/produto/bone_Preto.webp",
    descri: "Boné preto sem nenhuma marca, ajustável e confortável."
  },{
    nome: "Boné NY",
    preco: 2007.00,
    imagem: "imagem/produto/bone_NY.webp",
    descri: "Boné da New York vermelho, ajustável e confortável"
  },{
    nome: "Fita RGB",
    preco: 2000.00,
    imagem: "imagem/produto/Fita_led_rgb.webp",
    descri: "Fita led rgb 55 Metros, fita ideal para quarto gamer ou para quarto moderno."
  },
  {
    nome: "Fita LED Neon",
    preco: 700.00,
    imagem: "imagem/produto/Fita_Neon.webp",
    descri: "fita led neon 100W, 15Metros para quarto gamer e  para festas."
  },{
    nome: "Mouse RGB LogiTech",
    preco: 950.00,
    imagem: "imagem/produto/Mouse_RGB.webp",
    descri: "Mouse  RGB LogiTech G512 X plus, ideal para gamer, sem fio."
  } ,{
    nome: "Fita Led",
    preco: 850.00,
    imagem: "imagem/produto/Fita_LED_Branca.webp",
    descri: "fita led branca 100W, 15Metros para quarto gamer ou no telhado no natal natal e para festas."
  },{
    nome: "Mouse Gamer RGB",
    preco: 1300.00,
    imagem: "imagem/produto/MouseGam.webp",
    descri: "Mouse gamer com iluminação RGB personalizável, 6 botões programáveis e sensor de alta precisão de até 6400 DPI. Ideal para desempenho e conforto em longas sessões de jogo."
  },{
    nome: "Mousepad Gamer XXL",
    preco: 290.00,
    imagem: "imagem/produto/Mousepad_Gamer_RGB.webp",
    descri: "Mousepad gamer tamanho XXL com base antiderrapante e superfície magnética de alta precisão para movimentos rápidos e controle absoluto."
  },{
    nome: "Mousepad Ganger",
    preco: 300.00,
    imagem: "imagem/produto/Mousepad_GamerR.webp",
    descri: "Mousepad gamer Ganger tamanho XXL com base antiderrapante e superfície magnética de alta precisão para movimentos rápidos e controle absoluto."
  },{ 
    nome: "Mousepad Gamer Listrado",
    preco: 220.00,
    imagem: "imagem/produto/Mousepad_Gamer.webp",
    descri: "Mousepad gamer tamanho XXL com base antiderrapante e superfície magnética de alta precisão para movimentos rápidos e controle absoluto."
  },{ 
    nome: "Mousepad dragão",
    preco: 250.00,
    imagem: "imagem/produto/MousepadGamerXXL.webp",
    descri: "Mousepad Gamer dragão tamanho XXL com base antiderrapante e superfície magnética de alta precisão para movimentos rápidos e controle absoluto."
  },{ 
    nome: "Organizador de Cabo",
    preco: 350.00,
    imagem: "imagem/produto/Organizador_Cabo.webp",
    descri: "Fim da bagunça eletrônica, organize todos os cabos."
  },{ 
    nome: "OTG tipo C",
    preco: 200.00,
    imagem: "imagem/produto/OTG_tipo_C.webp",
    descri: "Transfira arquivos para o pendrive e também veja tudo que tem nele."
  },{ 
    nome: "Pen Drive 2TB",
    preco: 2100.00,
    imagem: "imagem/produto/Pen_Drive_2TB.webp",
    descri: "O melhor pendrive com 2TB de espaço, resistente a sobre carga."
  },{ 
    nome: "Pen Drive 32GB",
    preco: 6500.00,
    imagem: "imagem/produto/Pen_Drive_32GB.webp",
    descri: "O melhor pendrive de 32GB, resistente a sobre carga e anti magnetico."
  },{ 
    nome: "Pen Drive 64GB",
    preco: 9500.00,
    imagem: "imagem/produto/Pen_Drive_64GB.webp",
    descri: "O melhor pendrive de 64GB 3.2, resistente a sobre carga."
  },{ 
    nome: "Pen Drive 512GB",
    preco: 1200.00,
    imagem: "imagem/produto/Pen_Drive512GB.webp",
    descri: "O melhor pendrive de 512GB 3.2, resistente a sobre carga"
  },{ 
    nome: "OnePlus 8T",
    preco: 55000.00,
    imagem: "imagem/produto/OnePlus8T.webp",
    descri: "Tela: 6.55 Fluid AMOLED, Processador: Snapdragon 865, RAM: 12GB, Armazenamento: 256GB, Câmera: 48MP + 16MP + 5MP + 2MP, Bateria: 4500mAh e Sistema: OxygenOS 11."
  },{ 
    nome: "iphone 14",
    preco: 78000.00,
    imagem: "imagem/produto/Iphone14pro.webp",
    descri: "Tela: 6.1'' OLED, Sistema: iOS 16, Armazenamento: 128GB." 
  },{ 
    nome: "Iphone 14pro max",
    preco: 100000.00,
    imagem: "imagem/produto/Iphone14pro.webp",
    descri: "Tela: 6.7 OLED, Processador: A16 Bionic, RAM: 6GB, Armazenamento: 256GB, Câmera: 48MP + 12MP + 12MP, Bateria: 4323mAh e Sistema: iOS 16."
  },{ 
    nome: "iphone 15 pro max",
    preco: 120000.00,
    imagem: "imagem/produto/iphone15pro.webp",
    descri: "Tela: 6.7 OLED, Processador: A17 Pro, RAM: 8GB, Armazenamento: 256GB, Câmera: 48MP + 12MP + 12MP, Bateria: 4422mAh e Sistema: iOS 17."
  },{ 
    nome: "iphone 16pro max",
    preco: 135000.00,
    imagem: "imagem/produto/iphone16pro.webp",
    descri: "Tela: 6.8 OLED, Processador: A18 Pro, RAM: 8GB, Armazenamento: 512GB, Câmera: 48MP + 12MP + 12MP, Bateria: 4500mAh e Sistema: iOS 18."
  },{ 
    nome: "Iphone 17pro max 1TB",
    preco: 167000.00,
    imagem: "imagem/produto/Iphone17promax.webp",
    descri: "Tela: 6.9 OLED, Processador: A19 Pro, RAM: 12GB, Armazenamento: 1TB, Câmera: 48MP + 12MP + 12MP, Bateria: 4700mAh e Sistema: iOS 19"
  },{ 
    nome: "OnePlus 13 Pro",
    preco: 15000.00,
    imagem: "imagem/produto/OnePlus13Pro.webp",
    descri: "Tela: 6.8 AMOLED, Processador: Snapdragon 8 Gen 4, RAM: 16GB, Armazenamento: 1TB, Câmera: 50MP + 48MP + 32MP, Bateria: 5200mAh e Sistema: OxygenOS 15."
  },{ 
    nome: "Oppo Find X7 Pro",
    preco: 10000.00,
    imagem: "imagem/produto/OppoFindX7Pro.webp",
    descri: "Tela: 6.8 AMOLED, Processador: Snapdragon 8 Gen 3, RAM: 16GB, Armazenamento: 1TB, Câmera: 50MP tripla, Bateria: 5200mAh e Sistema: Android 14."
  },{ 
    nome: "Oppo Find X8 Pro",
    preco: 12000.00,
    imagem: "imagem/produto/OppoFindX8Pro.webp",
    descri: "Tela: 6.9 AMOLED, Processador: Snapdragon 8 Gen 4, RAM: 16GB, Câmera: 50MP tripla, Sistema: Android 15, Armazenamento: 1TB e Bateria: 5300mAh."
  },{ 
    nome: "Redmi 15C",
    preco: 15000.00,
    imagem: "imagem/produto/Redmi15C.webp",
    descri: "Armazenamento: 256GB, RAM: 4GB, Bateria: 6000mAh."
  },{ 
    nome: "Redmi Note 14",
    preco: 19000.00,
    imagem: "imagem/produto/Redminote14.webp",
    descri: "Armazenamento: 256GB, RAM: 8GB e Bateria:5500mAh."
  },{ 
    nome: "Redmi Note 8 ",
    preco: 9000.00,
    imagem: "imagem/produto/Redminote8.webp",
    descri: "Armazenamento: 64GB e RAM: 4GB."
  },{ 
    nome: "Samsung Galaxy S21 Ultra",
    preco: 55000.00,
    imagem: "imagem/produto/SamsungGalaxyS21Ultra.webp",
    descri: "Tela: 6.8 Dynamic AMOLED, Processador: Exynos 2100, RAM: 12GB, Armazenamento: 128GB, Câmera: 108MP + 10MP + 10MP + 12MP, Bateria: 5000mAh e Sistema: Android 11."
  },{ 
    nome: "Samsung Galaxy S22 Ultra",
    preco: 73000.00,
    imagem: "imagem/produto/SamsungGalaxyS22Ultra.webp",
    descri: "Processador: Exynos 2200, Armazenamento: 256GB, RAM: 12GB, Tela: 6.8 Dynamic AMOLED, Câmera: 108MP + 10MP + 10MP + 12MP, Bateria: 5000mAh e Sistema: Android 12."
  },{ 
    nome: "Samsung Galaxy S23 Ultra",
    preco: 89000.00,
    imagem: "imagem/produto/SamsungGalaxyS23Ultrar.webp",
    descri: "Tela: 6.8 Dynamic AMOLED, Processador: Snapdragon 8 Gen 2, Bateria: 5000mAh, Sistema: Android 13, Câmera: 200MP + 12MP + 10MP + 10MP, Armazenamento: 256GB e RAM: 12GB."
  },{ 
    nome: "Samsung Galaxy S24 Ultra",
    preco: 120000.00,
    imagem: "imagem/produto/SamsungS24ultra.webp",
    descri: "Tela: 6.8 Dynamic AMOLED, Processador: Snapdragon 8 Gen 3, RAM: 16GB, Armazenamento: 512GB, Câmera: 200MP + 12MP + 10MP + 10MP, Bateria: 5000mAh, Sistema: Android 14."
  },{ 
    nome: "Samsung Galaxy S25 Ultra",
    preco: 156000.00,
    imagem: "imagem/produto/SamsungS25ultra.webp",
    descri: "Tela: 6.8'' Dynamic AMOLED, Processador: Snapdragon 8 Gen 4, RAM: 16GB, Armazenamento: 1TB, Câmera: 200MP + 12MP + 10MP + 10MP, Bateria: 5000mAh, Sistema: Android 15." 
  },{ 
    nome: "Sony Xperia 1 II",
    preco: 10000.00,
    imagem: "imagem/produto/SonyXperia1II.webp",
    descri: "Tela: 6.5 OLED, Processador: Snapdragon 865, RAM: 8GB, Armazenamento: 256GB, Câmera: 12MP tripla, Bateria: 4000mAh, Sistema: Android 10."
  },{ 
    nome: "Sony Xperia 1 IV",
    preco: 13000.00,
    imagem: "imagem/produto/SonyXperia1IV.webp",
    descri: "Tela: 6.5 OLED, Processador: Snapdragon 8 Gen 1, RAM: 12GB, Armazenamento: 512GB, Câmera: 12MP tripla, Bateria: 5000mAh, Sistema: Android 12."
  },{ 
    nome: "Sony Xperia 1 III",
    preco: 16000.00,
    imagem: "imagem/produto/SonyXperia1III.webp",
    descri: "Tela: 6.5 OLED, Processador: Snapdragon 888, RAM: 12GB, Armazenamento: 256GB, Câmera: 12MP tripla, Bateria: 4500mAh, Sistema: Android 11."
  },{ 
    nome: "Sony Xperia 1 V",
    preco: 19000.00,
    imagem: "imagem/produto/SonyXperia1V.webp",
    descri: "Tela: 6.5 OLED, Processador: Snapdragon 8 Gen 2, RAM: 16GB, Armazenamento: 512GB, Câmera: 12MP tripla, Bateria: 5050mAh, Sistema: Android 13."
  },{ 
    nome: "Sony Xperia 1 VI",
    preco: 23000.00,
    imagem: "imagem/produto/SonyXperia1VI.webp",
    descri: "Tela: 6.6 OLED, Processador: Snapdragon 8 Gen 3, RAM: 16GB, Armazenamento: 1TB, Câmera: 12MP tripla, Bateria: 5100mAh e Sistema: Android 14."
  },{ 
    nome: "Sony Xperia 1 VII",
    preco: 26000.00,
    imagem: "imagem/produto/SonyXperia1VII.webp",
    descri: "Tela: 6.7 OLED, Processador: Snapdragon 8 Gen 4, RAM: 16GB, Armazenamento: 1TB, Câmera: 12MP tripla, Bateria: 5200mAh e Sistema: Android 15."
  },{ 
    nome: "Xiaomi 13 Ultra",
    preco: 17000.00,
    imagem: "imagem/produto/Xiaomi13Ultra.webp",
    descri: "Tela: 6.73 AMOLED,Processador: Snapdragon 8 Gen 2, RAM: 12GB, Armazenamento: 512GB, Câmera: 50MP quádrupla, Bateria: 5000mAh e Sistema: MIUI 14."
  },{ 
    nome: "Xiaomi 14 pro",
    preco: 21000.00,
    imagem: "imagem/produto/Xiaomi14Ultra.webp",
    descri: "Tela: 6.7 AMOLED, Processador: Snapdragon 8 Gen 3, RAM: 16GB, Armazenamento: 512GB, Câmera: 50MP quádrupla, Bateria: 5000mAh, Sistema: MIUI 15."
  },{ 
    nome: "Xiaomi 15 Ultra",
    preco: 27000.00,
    imagem: "imagem/produto/Xiaomi15Ultra.webp",
    descri: "Tela: 6.8 AMOLED, Processador: Snapdragon 8 Gen 4, RAM: 16GB, Armazenamento: 1TB, Câmera: 50MP quádrupla, Bateria: 5200mAh, Sistema: MIUI 16."
  },{ 
    nome: "Xiaomi Mi 10 Pro",
    preco: 16000.00,
    imagem: "imagem/produto/XiaomiMi10Pro.webp",
    descri: "Tela: 6.67 AMOLED, Processador: Snapdragon 865, RAM: 8GB, Armazenamento: 256GB, Câmera: 108MP + 8MP + 12MP + 20MP, Bateria: 4500mAh, Sistema: MIUI 11."
  },{ 
    nome: "Power Bank com todos cabos ",
    preco: 2500.00,
    imagem: "imagem/produto/PowerBankcabos.webp",
    descri: "Melhor Power bank para viagens longas com suporte de cabos externos, Bateria: 42800mha."
  },{ 
    nome: "Power Bank elecjet",
    preco: 1300.00,
    imagem: "imagem/produto/PowerBankelecjet.webp",
    descri: "Power Bank elecjet com carregamento rápido, bateria 10000mAh."
  },{ 
    nome: "power bank pineng",
    preco: 1200.00,
    imagem: "imagem/produto/powerbankpineng.webp",
    descri: "power bank pineng portátil anti sobreaquecimento bateria 10000mAh."
  },{ 
    nome: "Power Bank Solar",
    preco: 1500.00,
    imagem: "imagem/produto/PowerBankSolar.webp",
    descri: "Power Bank com recarregamento solar, bateria 14000mAh."
  },{ 
    nome: "Projetor hy320",
    preco: 5000.00,
    imagem: "imagem/produto/Projetorhy320.webp",
    descri: "Projetor hy320 pro 4k ultra hd android 13 wife6 smart tv."
  },{ 
    nome: "Projetor Portátil",
    preco: 3400.00,
    imagem: "imagem/produto/ProjetorPortatil.webp",
    descri: "Projetor Portátil 4k bm-112 ultra HD Smart Tv."
  },{ 
    nome: "porta detergente",
    preco: 950.00,
    imagem: "imagem/produto/portadetergente.webp",
    descri: "porta detergente, sabão em líquido e esponja bucha."
  },{ 
    nome: "Razer Basilisk V3 pro",
    preco: 1400.00,
    imagem: "imagem/produto/RazerBasilisk.webp",
    descri: "Sensor: Óptico 30000DPI, Conectividade: Wireless/USB, Botões: 11 e Bateria: Recarregável."
  },{ 
    nome: "Razer BlackWidow V4 Pro",
    preco: 1500.00,
    imagem: "imagem/produto/RazerBlackWidow.webp",
    descri: "Tipo: Mecânico (Razer Green), Conectividade: USB, Retroiluminação: RGB e Layout: ABNT2."
  },{ 
    nome: "Razer Huntsman V2",
    preco: 1200.00,
    imagem: "imagem/produto/RazerHuntsman.webp",
    descri: "Tipo: Mecânico (Opto-Mecânico), Conectividade: USB, Retroiluminação: RGB e Layout: ABNT2."
  },{ 
    nome: "Air force I",
    preco: 3500.00,
    imagem: "imagem/produto/Airforce.webp",
    descri: "sapatos Air force I brancas confortáveis."
  },{ 
    nome: "Air Jordan patrol",
    preco: 4000.00,
    imagem: "imagem/produto/AirJordanpatrol.webp",
    descri: "pata air jordan patro para uso no dia a dia confortável e ajustável."
  },{ 
    nome: "Air Jordan 34",
    preco: 3500.00,
    imagem: "imagem/produto/AirJordan34.webp",
    descri: "sapatos air jordan 34 muito confortáveis e ideias para alguns tipos de jogos."
  },{ 
    nome: "Apple MacBook Pro M1 Pro",
    preco: 26000.00,
    imagem: "imagem/produto/AppleM1Pro.webp",
    descri: "Tela: 16 Retina, Processador: Apple M1 Pro, RAM: 16GB, Armazenamento: 512GB SSD, Placa de Vídeo: Integrada M1 Pro, Sistema: macOS Monterey."
  },{ 
    nome: "Apple MacBook Pro M2 Max",
    preco: 32000.00,
    imagem: "imagem/produto/AppleM2Max.webp",
    descri: "Tela: 16 Retina, Processador: Apple M2 Max, RAM: 32GB, Armazenamento: 1TB SSD, Placa de Vídeo: Integrada M2 Max, Sistema: macOS Ventura."
  },{ 
    nome: "Apple MacBook Pro M3 Ultra",
    preco: 46000.00,
    imagem: "imagem/produto/AppleM3Ultra.webp",
    descri: "Tela: 16 Retina, Processador: Apple M3 Ultra, RAM: 64GB, Armazenamento: 2TB SSD, Placa de Vídeo: Integrada M3 Ultra, Sistema: macOS Sonoma."
  },{ 
    nome: "SteelSeries Apex Pro Mini Wireless",
    preco: 1200.00,
    imagem: "imagem/produto/SteelSeriesMiniWireless.webp",
    descri: "Tipo: Mecânico (OmniPoint 2.0), Conectividade: Wireless/USB, Retroiluminação: RGB, Layout: ABNT2."
  },{ 
    nome: "SteelSeries Rival 5",
    preco: 1000.00,
    imagem: "imagem/produto/SteelSeriesRival5.webp",
    descri: "Sensor: TrueMove Air 18000DPI, Conectividade: USB, Botões: 9, Bateria: Não."
  },{ 
    nome: "Smart tv Soriana",
    preco: 19500.00,
    imagem: "imagem/produto/smartSoriana.webp",
    descri: "Smart TV Soriana 70p, suporte Netflix, Spotify, YouTube, etc."
  },{ 
    nome: "T-shirt nike just do it",
    preco: 1200.00,
    imagem: "imagem/produto/Tshirtit.webp",
    descri: "T-shirt da Nike preta just do it, confortável não provoca irritação na pele."
  },{ 
    nome: "Bag Nike",
    preco: 1200.00,
    imagem: "imagem/produto/bagNike.webp",
    descri: "Praticidade e estilo em um só acessório. A bag Nike é perfeita para o dia a dia, com espaço ideal para itens essenciais e design esportivo moderno."
  },{ 
    nome: "Pasta Nike just do it red",
    preco: 1300.00,
    imagem: "imagem/produto/bagNikered.webp",
    descri: "Praticidade a pasta Nike just do it propiciona um estilo em um só acessório. A bag Nike é perfeita para o dia a dia, com espaço ideal para itens essenciais e design esportivo moderno."
  },{ 
    nome: "Camisa just do it",
    preco: 650.00,
    imagem: "imagem/produto/camisait.webp",
    descri: "Versátil e confortável para qualquer ocasião. Tecido respirável, corte moderno e disponível em diferentes cores para compor seu estilo."
  },{ 
    nome: "Camiseta the north face",
    preco: 870.00,
    imagem: "imagem/produto/camisetabranca.webp",
    descri: "confortável para qualquer ocasião. Tecido respirável, corte moderno e disponível á cor branca para compor seu estilo."
  },{ 
    nome: "Camiseta the north face",
    preco: 650.00,
    imagem: "imagem/produto/camisetapreta.webp",
    descri: "confortável para qualquer ocasião. Tecido respirável, corte moderno e disponível á core preta para compor seu estilo."
  },{ 
    nome: "Camiseta crazy diamond",
    preco: 450.00,
    imagem: "imagem/produto/Camisetadiamond.webp",
    descri: "Para os fãs de um estilo marcante, a camiseta Crazy Diamond traz um design ousado com inspiração na  jóia e tecido macio e resistente."
  },{ 
    nome: "Camiseta estilo Japão azul",
    preco: 850.00,
    imagem: "imagem/produto/camisetaazul.webp",
    descri: "Versátil e confortável para qualquer ocasião. Tecido respirável, corte moderno e disponível na cor azul para compor seu estilo."
  },{ 
    nome: "Camiseta estilo Japão branco",
    preco: 850.00,
    imagem: "imagem/produto/camisetajapao.webp",
    descri: "Versátil e confortável para qualquer ocasião. Tecido respirável, corte moderno e disponível na cor branca para compor seu estilo."
  },{ 
    nome: "Camiseta fantasminha",
    preco: 400.00,
    imagem: "imagem/produto/camisetafantasminha.webp",
    descri: "Versátil e confortável para qualquer ocasião. Tecido respirável, corte moderno e disponível em diferentes cores para compor seu estilo."
  },{ 
    nome: "Camiseta system",
    preco: 650.00,
    imagem: "imagem/produto/camisetasystem.webp",
    descri: "Versátil e confortável para qualquer ocasião. Tecido respirável, corte moderno e disponível em diferentes cores para compor seu estilo."
  },{ 
    nome: "Camiseta the north face",
    preco: 1000.00,
    imagem: "imagem/produto/camisetatheface.webp",
    descri: "camisa da the north face confortável para qualquer ocasião. Tecido respirável, corte moderno e disponível em diferentes cores para compor seu estilo."
  },{ 
    nome: "Camisola Nike",
    preco: 1400.00,
    imagem: "imagem/produto/camisolaNike.webp",
    descri: "Conforto e liberdade para o seu descanso. Feita com tecido leve e macio, ideal para noites tranquilas e momentos relaxantes."
  },{ 
    nome: "Camisola Nike black white",
    preco: 1900.00,
    imagem: "imagem/produto/camisolaNikeblackwhite.webp",
    descri: "Conforto e liberdade para o seu descanso e uso diário. Feita com tecido leve e macio, ideal para noites tranquilas e momentos relaxantes."
  },{ 
    nome: "Camisola Nike mood",
    preco: 1500.00,
    imagem: "imagem/produto/camisolaNikemood.webp",
    descri: "Conforto e liberdade para o seu descanso. Feita com tecido leve e macio, ideal para noites tranquilas e momentos relaxantes."
  },{ 
    nome: "camisola the north face",
    preco: 1200.00,
    imagem: "imagem/produto/camisolathenorthface.webp",
    descri: "Conforto e liberdade para o seu descanso. Feita com tecido leve e macio, ideal para noites tranquilas e momentos relaxantes."
  },{ 
    nome: "camisola nike just do it ",
    preco: 1200.00,
    imagem: "imagem/produto/camisolanikejustit.webp",
    descri: "Estilo esportivo com atitude. A camisola Nike com o icônico slogan Just Do It oferece conforto, qualidade e um visual moderno para o dia a dia."
  },{ 
    nome: "Capa de Chuva amarela",
    preco: 620.00,
    imagem: "imagem/produto/CapaChuvaamarela.webp",
    descri: "Proteção contra o mau tempo com leveza e conforto. Resistente à água, a capa de chuva amarela é fácil de dobrar e carregar, ideal para enfrentar dias chuvosos com estilo."
  },{ 
    nome: "Capa de Chuva preta",
    preco: 640.00,
    imagem: "imagem/produto/CapaChuvapreta.webp",
    descri: "Proteção contra o mau tempo com leveza e conforto. Resistente à água, a capa de chuva preta é fácil de dobrar e carregar, ideal para enfrentar dias chuvosos com estilo."
  },{ 
    nome: "Capa de Chuva Transparente",
    preco: 620.00,
    imagem: "imagem/produto/CapaChuvaTransparente.webp",
    descri: "Proteção sem esconder o estilo! Leve, dobrável e impermeável, a capa de chuva transparente combina com qualquer look e é ideal para dias chuvosos."
  },{ 
    nome: "Chaleira elétrica Decker",
    preco: 2500.00,
    imagem: "imagem/produto/chaleiraeletricaDeckel.webp",
    descri: "Ferva água rapidamente com praticidade e segurança 2L e 1850W. Ideal para preparar chás, cafés e refeições instantâneas, com desligamento automático e design moderno."
  },{ 
    nome: "Chaleira elétrica de vidro",
    preco: 3500.00,
    imagem: "imagem/produto/chaleiraeletricavidro.webp",
    descri: "Ferva água rapidamente com praticidade e segurança. Ideal para preparar chás, cafés e refeições instantâneas, com desligamento automático e design moderno."
  },{ 
    nome: "Cinta Postural",
    preco: 600.00,
    imagem: "imagem/produto/CintaPostural.webp",
    descri: "Melhore sua postura com conforto! A Cinta Postural alinha sua coluna, alivia dores nas costas e pode ser usada discretamente sob a roupa no dia a dia."
  },{ 
    nome: "Carregador Solar para Celula",
    preco: 1100.00,
    imagem: "imagem/produto/CarregadorSolar.webp",
    descri: "carregue seu celular com carregador que transforma o calor em energia em segurança bateria: 30000mAh."
  },{ 
    nome: "Carregador Sem Fio Universal",
    preco: 780.00,
    imagem: "imagem/produto/CarregadorSemFio.webp",
    descri: "carregue em segurança com o carregador sem fio magnético."
  },{ 
    nome: "Capa Protetora para AirPods",
    preco: 200.00,
    imagem: "imagem/produto/CapaAirPods.webp",
    descri: "capa para o teu airpods é uma proteção para evitar danificar ou sujar a caixa do airpods."
  },{ 
    nome: "conjunto Gucci",
    preco: 4500.00,
    imagem: "imagem/produto/conjuntoGucci.webp",
    descri: "um conjunto composto por camisola e calça, ideal para uso dia a dia e também para exercícios físicos."
  },{ 
    nome: "Corsair K70 Pro Mini Wireless",
    preco: 2000.00,
    imagem: "imagem/produto/CorsairK70Pro.webp",
    descri: "Tipo: Mecânico (Cherry MX), Conectividade: Wireless/Bluetooth/USB, Retroiluminação: RGB e Layout: ABNT2."
  },{ 
    nome: "Dell Alien ware Aurora R16",
    preco: 38000.00,
    imagem: "imagem/produto/DellAlienwareAuroraR16.webp",
    descri: "Processador: Intel Core i9-14900K, RAM: 64GB, Armazenamento: 2TB SSD, Placa de Vídeo: RTX 4090 e Sistema: Windows 11"
  },{ 
    nome: "Dell XPS 13 9300",
    preco: 28000.00,
    imagem: "imagem/produto/DellXPS3.webp",
    descri: "Tela: 13.4 FHD+, Processador: Intel Core i7-1065G7, RAM: 16GB, Armazenamento: 512GB SSD, Placa de Vídeo: Intel Iris Plus e Sistema: Windows 10."
  },{ 
    nome: "Dispenser de Sabão Automático",
    preco: 870.00,
    imagem: "imagem/produto/DispenserdeSabao.webp",
    descri: "Melhor dispensador de sabão automático, rápido, simples de usar e sem erro."
  },{ 
    nome: "Espelho  Luz LED",
    preco: 1100.00,
    imagem: "imagem/produto/EspelhoLuzLED.webp",
    descri: "visualiza o teu visual perfeito, com clareza."
  },{ 
    nome: "Espelho de Maquiagem",
    preco: 800.00,
    imagem: "imagem/produto/EspelhodeMaquiagem.webp",
    descri: "espelho com  conjunto para maquiagem, com luz led e móvel."
  },{ 
    nome: "Espelho para vestir",
    preco: 1400.00,
    imagem: "imagem/produto/Espelhoparavestir.webp",
    descri: "o melhor espelho para vestir sem poluição luminosa ideal para quarto."
  },{ 
    nome: "Espremedor de Frutas",
    preco: 2500.00,
    imagem: "imagem/produto/EspremedordeFrutas.webp",
    descri: "cria sumos frescos com frutas fresca e saborosas."
  },{ 
    nome: "Fogão Atlas",
    preco: 26000.00,
    imagem: "imagem/produto/FogaoAtlas.webp",
    descri: "fogão de 5 bocas atlas utop glass e forno."
  },{ 
    nome: "fogão casual",
    preco: 24000.00,
    imagem: "imagem/produto/fogaocasual.webp",
    descri: "fogão de 4 bocas CFO4NAB com forno simples."
  },{ 
    nome: "fone bluetooth",
    preco: 980.00,
    imagem: "imagem/produto/fonebluetooth.webp",
    descri: "fone bluetooth M25 pro GamerX15 tws bateria: 1500mAh."
  },{ 
    nome: "Fone Cat ear",
    preco: 750.00,
    imagem: "imagem/produto/fonedeouvi.webp",
    descri: "fone de ouvido para gamer Cat ear, fone com microfone com isolamento de ruídos."
  },{ 
    nome: "Fone Colorido",
    preco: 650.00,
    imagem: "imagem/produto/FoneColoridocat.webp",
    descri: "fone In-ear Colorido ca conexão bluetooth e isolamento de ruídos."
  },{ 
    nome: "Garrafa de água",
    preco: 900.00,
    imagem: "imagem/produto/garrafa.webp",
    descri: "garrafa de água 1000ml, ideal para ir a faculdade ou trabalhar."
  },{ 
    nome: "Garrafa de água esportivo",
    preco: 700.00,
    imagem: "imagem/produto/GarrafadeaguEs.webp",
    descri: "garrafa de água ideal para praticar corridas longas."
  },{ 
    nome: "Garrafa de água esportivo",
    preco: 800.00,
    imagem: "imagem/produto/garrafadeagua.webp",
    descri: "garrafa de água esportivo de aço Inox"
  },{ 
    nome: "Geladeira Electrolux",
    preco: 25000.00,
    imagem: "imagem/produto/GeladeiraElectrolux.webp",
    descri: "geladeira Electrolux frost free 474l duplex."
  },{ 
    nome: "Geladeira Electrolux",
    preco: 30000.00,
    imagem: "imagem/produto/GeladeiraElectroluxfr.webp",
    descri: "Geladeira Electrolux frost free inverter 431l."
  },{ 
    nome: "Geladeira smart",
    preco: 41000.00,
    imagem: "imagem/produto/Geladeirasmart.webp",
    descri: "Geladeira smart LG inverter french door."
  },{ 
    nome: "Geladeira Samsung",
    preco: 25000.00,
    imagem: "imagem/produto/GeladeiraSamsung.webp",
    descri: "Geladeira Samsung RF56N9740SR 550 L A+"
  },{ 
    nome: "jaqueta para mulher",
    preco: 1200.00,
    imagem: "imagem/produto/girljacket.webp",
    descri: "jaqueta da the north face preta com partes rosas aconchegante."
  },{ 
    nome: "Google Pixel 5",
    preco: 13000.00,
    imagem: "imagem/produto/GooglePixel5.webp",
    descri: "Tela: 6.0 OLED, Processador: Snapdragon 765G, RAM: 8GB, Armazenamento: 128GB, Câmera: 12.2MP + 16MP, Bateria: 4080mAh e Sistema: Android 11."
  },{ 
    nome: "Google Pixel 7 Ultra",
    preco: 21000.00,
    imagem: "imagem/produto/GooglePixel7Ultra.webp",
    descri: "Tela: 6.7 OLED, Processador: Google Tensor G2, RAM: 12GB, Armazenamento: 256GB, Câmera: 50MP + 48MP + 12MP, Bateria: 5000mAh e Sistema: Android 13."
  },{ 
    nome: "Google Pixel 8 Ultra",
    preco: 36000.00,
    imagem: "imagem/produto/GooglePixel8Ultra.webp",
    descri: "Tela: 6.7 OLED, Processador: Google Tensor G3, RAM: 12GB, Armazenamento: 512GB, Câmera: 50MP + 48MP + 12MP, Bateria: 5050mAh e Sistema: Android 14."
  },{ 
    nome: "Google Pixel 9 Ultra",
    preco: 40000.00,
    imagem: "imagem/produto/GooglePixel9Ultra.webp",
    descri: "Tela: 6.8 OLED, Processador: Google Tensor G4, RAM: 16GB, Armazenamento: 1TB, Câmera: 50MP + 48MP + 12MP, Bateria: 5100mAh e Sistema: Android 15."
  },{ 
    nome: "Google Pixel 10 Ultra",
    preco: 45000.00,
    imagem: "imagem/produto/GooglePixel10Ultra.webp",
    descri: "Tela: 6.8 OLED, Processador: Google Tensor G5, RAM: 16GB, Armazenamento: 1TB, Câmera: 50MP + 48MP + 12MP, Bateria: 5200mAh e Sistema: Android 16."
  },{ 
    nome: "Headset Gamer",
    preco: 2500.00,
    imagem: "imagem/produto/HeadsetGamer.webp",
    descri: "Headset Gamer com fio e  microfone, com cancelador de ruídos alta potência."
  },{ 
    nome: "HoverBoard",
    preco: 4500.00,
    imagem: "imagem/produto/Hoverboard.webp",
    descri: "Hoverboard skate elétrico bateria: 2500mAh 55km/h."
  },{ 
    nome: "HP Spectre x360 14",
    preco: 30000.00,
    imagem: "imagem/produto/HPSpectrex36014.webp",
    descri: "Tela: 13.5 OLED, Processador: Intel Core i7-1165G7, RAM: 16GB, Armazenamento: 1TB SSD, Placa de Vídeo: Intel Iris Xe e Sistema: Windows 11."
  },{ 
    nome: "Huawei P30 Pro",
    preco: 21000.00,
    imagem: "imagem/produto/HuaweiP30Pro.webp",
    descri: "Tela: 6.47 OLED, Processador: Kirin 980, RAM: 8GB, Armazenamento: 128GB / 256GB, Câmera: 40MP + 20MP + 8MP + ToF, Frontal: 32MP, Bateria: 4200mAh, Sistema: EMUI 9.1 (atualizável)."
  },{ 
    nome: "Huawei P40 Pro",
    preco: 28000.00,
    imagem: "imagem/produto/HuaweiP40Pro.webp",
    descri: "Tela: 6.58 OLED Processador: Kirin 990, RAM: 8GB, Armazenamento: 256GB, Câmera: 50MP + 12MP + 40MP + ToF, Bateria: 4200mAh e Sistema: EMUI 10."
  },{ 
    nome: "Huawei P50 Pro",
    preco: 35000.00,
    imagem: "imagem/produto/HuaweiP50Pro.webp",
    descri: "Tela: 6.6 OLED, Processador: Snapdragon 888, RAM: 8GB, Armazenamento: 512GB, Câmera: 50MP + 64MP + 13MP + 40MP, Bateria: 4360mAh e Sistema: HarmonyOS 2.0."
  },{ 
    nome: "HyperX Alloy Origins Core",
    preco: 120.00,
    imagem: "imagem/produto/HyperXAlloy.webp",
    descri: "Tipo: Mecânico (HyperX Red), Conectividade: USB, Retroiluminação: RGB e Layout: ABNT2."
  },{ 
    nome: "HyperX Pulsefire FPS Pro",
    preco: 1100.00,
    imagem: "imagem/produto/HyperXPulsefire.webp",
    descri: "Sensor: Pixart 3389 16000DPI, Conectividade: USB, Botões: 6 e Bateria: Não."
  },{ 
    nome: "HyperX Pulsefire Haste 2 Wireless",
    preco: 1400.00,
    imagem: "imagem/produto/HyperXPulsefireHaste.webp",
    descri: "Sensor: Óptico 26000DPI, Conectividade: Wireless/USB, Botões: 6 e Bateria: Recarregável."
  },{ 
    nome: "jacket Gucci",
    preco: 1900.00,
    imagem: "imagem/produto/jacketGucci.webp",
    descri: "jaqueta da Gucci, castanha, super confortável."
  },{ 
    nome: "jacket the north face",
    preco: 1500.00,
    imagem: "imagem/produto/jacketthenorth.webp",
    descri: "jacket the north face gore-tex, preta super confortável."
  },{ 
    nome: "JBL bombox",
    preco: 1800.00,
    imagem: "imagem/produto/JBLbombox.webp",
    descri: "JBL bombox bateria 2500mAh, suporte a micro SD e pendrive."
  },{ 
    nome: "JBL charge 4",
    preco: 1900.00,
    imagem: "imagem/produto/JBLcharge.webp",
    descri: "JBL charge 4 bateria 3500mAh, suporte a micro SD, pendrive e microfone."
  },{ 
    nome: "Jogo de Copos Bali",
    preco: 550.00,
    imagem: "imagem/produto/JogoCoposBali.webp",
    descri: "Jogo de Copos Bali quadrado 320ml, Para festas entre amigos."
  },{ 
    nome: "Jogo de Copos compridos",
    preco: 640.00,
    imagem: "imagem/produto/JogoCoposcompridos.webp",
    descri: "Jogo de Copos compridos, Para festas e uso no dia a dia entre amigos e família."
  },{ 
    nome: "Jogo de Copos transparente",
    preco: 650.00,
    imagem: "imagem/produto/JogoCopostransparente.webp",
    descri: "Jogo de Copos transparente, para uso diário."
  },{ 
    nome: "Joystick ps 4",
    preco: 2000.00,
    imagem: "imagem/produto/joystickps4.webp",
    descri: "Compatibilidade: PlayStation 4 / PC / Android, Conectividade: Bluetooth / USB, Bateria: 1000mAh recarregável, Botões: 14 + Touchpad, Extras: Sensor de movimento, luz LED, entrada para fone P2, Peso: ~210g."
  },{ 
    nome: "joystick ps5",
    preco: 3000.00,
    imagem: "imagem/produto/joystickps5.webp",
    descri: "Compatibilidade: PlayStation 5 / PC / Android, Conectividade: Bluetooth 5.1 / USB-C, Bateria: ~1560mAh recarregável, Botões: 14 + Touchpad, Feedback háptico, gatilhos adaptáveis, microfone embutido, entrada P2 e Peso: ~280g."
  },{ 
    nome: "kit C-3 garrafa",
    preco: 1200.00,
    imagem: "imagem/produto/kitC3garrafa.webp",
    descri: "garrafa de água 500ml 1L e 2L kit completo para caminhadas e trabalho."
  },{ 
    nome: "Kit de Nail Art",
    preco: 450.00,
    imagem: "imagem/produto/KitNailArt.webp",
    descri: "kit para manicure, cabelo e cara, verniz, verniz base , lápis para sobrancelhas e mais."
  },{ 
    nome: "Kit de Limpeza para Eletrônicos",
    preco: 450.00,
    imagem: "imagem/produto/KitLimpeza.webp",
    descri: "kit de limpeza para todo tipo de eletrônicos PC, teclado, laptop e mais."
  },{ 
    nome: "Kit de Slime",
    preco: 350.00,
    imagem: "imagem/produto/KitSlime.webp",
    descri: "Kit de Slime Colorido para brincar com amigos e família."
  },{ 
    nome: "Adesivos Decorativos",
    preco: 180.00,
    imagem: "imagem/produto/AdesivosDecorativos.webp",
    descri: "adesivos de carro para decorar o laptop, caderno e outros."
  },{ 
    nome: "Adesivos Decorativos Mistura",
    preco: 150.00,
    imagem: "imagem/produto/AdesivosDecorativosMis.webp",
    descri: "adesivos mistus para colocar no laptop no carro no caderno no mause e mais."
  },{ 
    nome: "Adesivos Decorativos Corredor",
    preco: 160.00,
    imagem: "imagem/produto/AdesivosDecorativosracing.webp",
    descri: "adesivos para fãs de corrida de carros e motorizada para aparelhos eletrônicos."
  },{ 
    nome: "Lenovo Legion 5 Pro",
    preco: 29000.00,
    imagem: "imagem/produto/LenovoLegion5Pro.webp",
    descri: "Tela: 16 WQXGA, Processador: AMD Ryzen 7 5800H, RAM: 16GB, Armazenamento: 1TB SSD, Placa de Vídeo: RTX 3070 e Sistema: Windows 10."
  },{ 
    nome: "Lentes Clip-On",
    preco: 350.50,
    imagem: "imagem/produto/LentesClip.webp",
    descri: "Lentes Clip-On para Celular Fotos inovadoras."
  },{ 
    nome: "Logitech G915 TKL",
    preco: 1200.00,
    imagem: "imagem/produto/LogitechG915.webp",
    descri: "Tipo: Mecânico (Low Profile GL), Conectividade: Wireless LIGHTSPEED/Bluetooth/USB, Retroiluminação: RGB e Layout: ABNT2."
  },{ 
    nome: "Luva Touch para Smartphone",
    preco: 650.00,
    imagem: "imagem/produto/LuvaTouch.webp",
    descri: "luva protetora use o celular no frio."
  },{ 
    nome: "Lâmpada Led Inteligente Wi-Fi",
    preco: 1400.00,
    imagem: "imagem/produto/LampadaLedInteligente.webp",
    descri: "lâmpada led inteligente que funciona com WiFi conecte com o seu telemóvel."
  },{ 
    nome: "Lenovo ThinkPad X1",
    preco: 34000.00,
    imagem: "imagem/produto/LenovoThinkPad.webp",
    descri: "Lenovo ThinkPad X1 Carbon Gen 11 Tela: 14 WUXGA, Processador: Intel Core i7-1355U, RAM: 16GB, Armazenamento: 1TB SSD, Placa de Vídeo: Intel Iris Xe e Sistema: Windows 11."
  },{ 
    nome: "Logitech MX Master 3",
    preco: 1200.00,
    imagem: "imagem/produto/LogitechMXMaster.webp",
    descri: "Sensor: Darkfield 4000DPI, Conectividade: Wireless/Bluetooth/USB, Botões: 7 e Bateria: Recarregável."
  },{ 
    nome: "mini drone E88 pro 4k FHD",
    preco: 5000.00,
    imagem: "imagem/produto/minidroneE88.webp",
    descri: "Diversão nas alturas."
  },{ 
    nome: "Motorola Edge 50 pro",
    preco: 45000.00,
    imagem: "imagem/produto/MotorolaEdge50pro.webp",
    descri: "Tela: 6.67 OLED, Processador: Snapdragon 8 Gen 3, RAM: 16GB, Armazenamento: 512GB, Câmera: 200MP + 50MP + 12MP, Bateria: 4700mAh e Sistema: Android 14."
  },{ 
    nome: "Mini Projetor Portátil",
    preco: 120.00,
    imagem: "imagem/produto/MiniProjetor.webp",
    descri: "Mini Projetor Portátil hy300 pro 4k Android 11."
  },{ 
    nome: "Multi adaptador",
    preco: 1100.00,
    imagem: "imagem/produto/multiadaptador.webp",
    descri: "adaptador múltiplo para quase todos os tipos de aparelho."
  },{ 
    nome: "Máscara Facial",
    preco: 850.00,
    imagem: "imagem/produto/MascaraFacial.webp",
    descri: "creme para hidratar a pele nas noites depois do banho."
  },{ 
    nome: "microfone para gamer",
    preco: 1200.00,
    imagem: "imagem/produto/microfonegamer.webp",
    descri: "microfone para criadores de conteúdos e gamers hyperx"
  },{ 
    nome: "nike just do it dri",
    preco: 1000.00,
    imagem: "imagem/produto/nikedri.webp",
    descri: "camiseta da Nike preta para uso diário e passeios com amigos e familiares."
  },{ 
    nome: "playstation 4 pro",
    preco: 55000.00,
    imagem: "imagem/produto/ps4pro.webp",
    descri: "Resolução: até 4K (PS4 Pro), Armazenamento: 500GB a 1TB, Mídia: Blu-ray + digital e Conexão: Wi-Fi, Bluetooth, HDMI."
  },{ 
    nome: "PS5 pro black",
    preco: 75000.00,
    imagem: "imagem/produto/PS5problack.webp",
    descri: "Resolução: 4K até 120FPS, Armazenamento: SSD 825GB, Mídia: Blu-ray (modelo com disco), Destaques: DualSense, Ray Tracing, carregamento ultra rápido e Conexão: Wi-Fi 6, HDMI 2.1, USB-C."
  },{ 
    nome: "PlayStation 3",
    preco: 21000.00,
    imagem: "imagem/produto/PlayStation3.webp",
    descri: "Resolução: até 1080p, Armazenamento: 20GB a 500GB, Mídia: Blu-ray e Conexão: HDMI, Ethernet, Wi-Fi."
  },{ 
    nome: "Nintendo switch",
    preco: 19000.00,
    imagem: "imagem/produto/Nintendoswitch.webp",
    descri: "Tela: 6.2 Touchscreen, Armazenamento: 32GB (expansível via microSD), Modos: Portátil / Mesa / TV, Destaques: Joy-Con destacáveis, exclusivos como Zelda, Mario e Conexão: Wi-Fi, Multiplayer local e online."
  },{ 
    nome: "playstation 4",
    preco: 35000.00,
    imagem: "imagem/produto/playstation4.webp",
    descri: "Resolução: até 1080p, Armazenamento: 500GB ou 1TB, Mídia: Blu-ray e digital, Destaques: Controle DualShock 4, jogos exclusivos e Conectividade: Wi-Fi, Bluetooth, HDMI."
  },
  { 
    nome: "Xbox 360",
    preco: 25000.00,
    imagem: "imagem/produto/Xbox360.webp",
    descri: "Resolução: até 1080p, Armazenamento: 4GB a 320GB, Mídia: DVD, Destaques: Kinect (opcional), Xbox Live e Conectividade: Wi-Fi, HDMI, USB 2.0."
  },{ 
    nome: "Xbox series S",
    preco: 36000.00,
    imagem: "imagem/produto/XboxseriesS.webp",
    descri: "Resolução: até 1440p (upscaling para 4K), Armazenamento: SSD 512GB, Mídia: Somente digital, Destaques: Game Pass, carregamento rápido e Conectividade: HDMI 2.1, Wi-Fi, Bluetooth."
  },{ 
    nome: "Xbox one",
    preco: 40000.00,
    imagem: "imagem/produto/Xboxone.webp",
    descri: "Resolução: até 1080p, Armazenamento: 500GB a 1TB, Mídia: Blu-ray e digital, Destaques: Game Pass, integração com Window e Conectividade: Wi-Fi, HDMI, USB 3.0."
  },{ 
    nome: "Xbox series X",
    preco: 45000.00,
    imagem: "imagem/produto/XboxseriesX.webp",
    descri: "Resolução: 4K real até 120FPS (com suporte a 8K), Armazenamento: SSD 1TB NVMe, Mídia: Blu-ray 4K UHD e digital, Processador: AMD Zen 2 (8 núcleos, 3.8GHz), GPU: 12 TFLOPS – RDNA 2, Conectividade: HDMI 2.1, Wi-Fi, Ethernet, USB 3.1."
  },{ 
    nome: "tecno spark 40",
    preco: 66000.00,
    imagem: "imagem/produto/tecnospark40.webp",
    descri: "Tela: 6.6 HD+ IPS, Processador: Octa-core, RAM: 4GB, Armazenamento: 128GB (expansível), Câmera: 50MP principal + IA, Bateria: 5000mAh e Sistema: Android 13 Go Edition."
  },{ 
    nome: "Óculos de Sol Fashion",
    preco: 350.00,
    imagem: "imagem/produto/oculosSol.webp",
    descri: "Estilo: Moderno e elegante, Proteção: 100% UV400, Material: Policarbonato resistente, Uso: Unissex – ideal para o dia a dia e ocasiões especiais e Destaques: Leve, confortável e com armação estilizada."
  },{ 
    nome: "Tapete de Entrada ",
    preco: 400.00,
    imagem: "imagem/produto/TapeteEntrada.webp",
    descri: "Tamanho: 130cm x 90cm, Material: Microfibra antiderrapante, uso na entrada, Estampas modernas e cores vivas e confortável ao toque"
  },{ 
    nome: "Tapete de Entrada Divertido",
    preco: 550.00,
    imagem: "imagem/produto/TapeteEntradaDivertido.webp",
    descri: "Tamanho: 150cm x 80cm, Material: Microfibra antiderrapante, uso na entrada, Estilo Ricky e Morty cores vivas e confortável ao toque "
  },{ 
    nome: "Tapete de Entrada",
    preco: 450.00,
    imagem: "imagem/produto/TapeteDivertido.webp",
    descri: "Tamanho: 110cm x 90cm, Material: Microfibra antiderrapante, uso na entrada, cores vivas e confortável ao toque"
  },{ 
    nome: "Tapete Divertido Macumba",
    preco: 450.00,
    imagem: "imagem/produto/Tapetemacumba.webp",
    descri: "Tamanho: 110cm x 90cm, Material: Microfibra antiderrapante, uso na entrada, Estilo brincadeira cores vivas e confortável ao toque"
  },{ 
    nome: "Tapete vá embora",
    preco: 500.00,
    imagem: "imagem/produto/Tapeteembora.webp",
    descri: "Tamanho: 110cm x 90cm, Material: Microfibra antiderrapante, uso na entrada, Estilo anti social cores vivas e confortável ao toque"
  },{ 
    nome: "Tapete de Yoga Antiderrapante",
    preco: 450.00,
    imagem: "imagem/produto/TapeteAntiderrapante.webp",
    descri: "Prática yoga da forma segura e segura sem derrapagem."
  },{ 
    nome: "Teclado Mecânico portátil Ultra Compacto",
    preco: 1100.00,
    imagem: "imagem/produto/TecladoUltraCompacto.webp",
    descri: "Formato: 60% – ultracompacto e fácil de transportar, Switches: Mecânicos, ideal para digitação e jogos, Iluminação: RGB personalizável, Portabilidade: Design leve e minimalista, ideal para setups reduzidos"
  },{ 
    nome: "Teclado Mecânico Redragon",
    preco: 1200.00,
    imagem: "imagem/produto/TecladoRedragon.webp",
    descri: "Tipo: Mecânico com switches de alta performance, Iluminação: RGB com efeitos personalizáveis, Conectividade: USB com cabo trançado resistente, Destaques: Ideal para gamers e produtividade, resposta rápida e durável."
  },{ 
    nome: "Relógio Biden",
    preco: 95000.00,
    imagem: "imagem/produto/RelogioBiden.webp",
    descri: "Estilo: Executivo moderno, Funções: Data, cronômetro e resistência à água, Material: Aço inox com acabamento escovado, Ideal para: Eventos formais e uso diário"
  },{ 
    nome: "Relógio Bulova",
    preco: 100000.00,
    imagem: "imagem/produto/RelogioBulova.webp",
    descri: "Origem: Marca tradicional americana, Movimento: Precisão Quartz, Material: Pulseira em aço e vidro mineral resistente, estaques: Design refinado com performance premium."
  },{ 
    nome: "Relógio Deyros",
    preco: 120000.00,
    imagem: "imagem/produto/RelogioDeyros.webp",
    descri: "Estilo: Esportivo e casual, Material: Pulseira em silicone e caixa metálica, Funções: Cronômetro, data e resistência à água, Ideal para: Uso diário com visual marcante"
  },{ 
    nome: "relógio Empório Armani",
    preco: 75000.00,
    imagem: "imagem/produto/relogioArmani.webp",
    descri: "Design: Luxuoso e sofisticado, Material: Caixa em aço inoxidável, pulseira premium, Movimento: Quartz, Resistência: Até 50 metros, Destaques: Elegância clássica com toque moderno"
  },{ 
    nome: "Relógio Smart tuguir",
    preco: 1400.00,
    imagem: "imagem/produto/RelogioSmarttuguir.webp",
    descri: "Tipo: Smartwatch com múltiplas funções, Tela: Full Touch colorida, Funções: Monitor cardíaco, contador de passos, notificações e mais, Compatibilidade: Android e iOS, Bateria: Longa duração com carregamento magnético"
  },{ 
    nome: "webcam ",
    preco: 1500.00,
    imagem: "imagem/produto/webcam.webp",
    descri: "Resolução: Full HD 1080p, Microfone: Embutido com redução de ruído, Compatibilidade: Windows, macOS e Linux, Conexão: USB Plug & Play, Uso: Reuniões, aulas online e streamings"
  },{ 
    nome: "TV Samsung QE55Q60T 4K",
    preco: 40000.00,
    imagem: "imagem/produto/TVSamsungQE55Q60T.webp",
    descri: "Tela: QLED 55 polegadas, Resolução: 4K Ultra HD, Sistema: Tizen, Recursos: HDR, Bixby, Alexa, Smart Hub, Conectividade: Wi-Fi, Bluetooth, HDMI, USB"
  },{ 
    nome: "TV Samsung Curved",
    preco: 30000.00,
    imagem: "imagem/produto/TVSamsungCurved.webp",
    descri: "Tela: Curva com imersão aprimorada, Resolução: 4K UHD, Recursos: HDR, Smart Hub, controle por voz, Tamanho: Diversas opções de polegada"
  },{ 
    nome: "TV Amazon Fire 4-Series 4K",
    preco: 55000.00,
    imagem: "imagem/produto/TVAmazonSeries4K.webp",
    descri: "Sistema: Fire TV integrado, Resolução: 4K Ultra HD, Controle: Alexa por voz, Conectividade: Wi-Fi, HDMI, USB, Streaming: Acesso rápido à Netflix, Prime Video, YouTube, etc."
  },{ 
    nome: "T-shirt the north face",
    preco: 850.00,
    imagem: "imagem/produto/Tshirtface.webp",
    descri: "t-shirt da the north face preta feita de linho, confortável para uso diário."
  },{ 
    nome: "t-shirtLK",
    preco: 550.00,
    imagem: "imagem/produto/tshirtLK.webp",
    descri: "camiseta preta estampada LK para uso diário confortável e é antialérgica."
  },{ 
    nome: "Roupa casual",
    preco: 15000.00,
    imagem: "imagem/produto/Ropacasual.webp",
    descri: "ropa casual camiseta, camisa, calça e sapato conjunto."
  },{ 
    nome: "TECNO Spark Go",
    preco: 39000.00,
    imagem: "imagem/produto/TECNOSparkGo.webp",
    descri: "Tela: 6,6″ HD+ (720×1612) com taxa de atualização 90Hz, Processador: UniSoC T606, RAM/Armazenamento: 6 GB + 64 GB ou 8 GB + 64/128 GB (com RAM virtual), Câmeras: Traseira 13 MP + AI‑CAM / Frontal 8 MP, Bateria: 5000 mAh carregamento 10 W, Sistema: Android T‑Go. "
  },{ 
    nome: "Roupa casual",
    preco: 14000.00,
    imagem: "imagem/produto/conjuntoRopa.webp",
    descri: "conjunto de roupa completo, calça, camiseta, sapato, relógio e óculos para manter o estilo."
  },{ 
    nome: "infinix hot 40 pro",
    preco: 37000.00,
    imagem: "imagem/produto/infinixhot40pro.webp",
    descri: "Tela: 6.78 IPS LCD, 120Hz, Processador: MediaTek Helio G99, RAM: 8GB, Armazenamento: 128GB / 256GB, Câmera: 108MP (principal) + 2MP (profundidade), Frontal: 32MP, Bateria: 5000mAh com carregamento rápido de 33W, Sistema: Android 13 com XOS."
  },{ 
    nome: "infinix hot 50 pro",
    preco: 55000.00,
    imagem: "imagem/produto/infinixhot50pro.webp",
    descri: "Tela: 6.78 AMOLED, 120Hz, Processador: MediaTek Helio G99 Ultimate, RAM: 8GB, Armazenamento: 256GB, Câmera: 108MP + 2MP, Frontal: 32MP com IA, Bateria: 5000mAh com carregamento rápido de 45W, Sistema: Android 14 com XOS."
  },{ 
    nome: "Armário Multiuso 2 Portas",
    preco: 550.00,
    imagem: "imagem/produto/ArmarioMultiuso.webp",
    descri: "Armário com prateleiras internas, ideal para cozinha, lavanderia ou quarto."
},{ 
    nome: "Cadeira Gamer Reclinável",
    preco: 550.00,
    imagem: "imagem/produto/CadeiraGamer.webp",
    descri: "Cadeira ergonômica com encosto reclinável, apoio de braço ajustável e rodinhas silenciosas."
},{ 
    nome: "Conjunto de Utensílios de Cozinha em Silicone",
    preco: 550.00,
    imagem: "imagem/produto/ConjuntoUtensilios.webp",
    descri: "10 peças resistentes ao calor, ideais para panelas antiaderentes."
},{ 
    nome: "Criado-Mudo com 2 Gavetas",
    preco: 550.00,
    imagem: "imagem/produto/CriadoMudo.webp",
    descri: "Compacto, ideal para quartos, com acabamento em pintura UV e puxadores discretos."
},{ 
    nome: "Cômoda 5 Gavetas",
    preco: 550.00,
    imagem: "imagem/produto/ComodaGavetas.webp",
    descri: "Cômoda espaçosa com corrediças metálicas e puxadores modernos."
},{ 
    nome: "Forno Elétrico 45L",
    preco: 550.00,
    imagem: "imagem/produto/FornoEletrico.webp",
    descri: "Forno com controle de temperatura, timer e função dourar, ideal para assar e gratinar."
},{ 
    nome: "Frigideira Revestida com Tampa",
    preco: 550.00,
    imagem: "imagem/produto/FrigideiraTampa.webp",
    descri: "Ideal para preparo rápido, com revestimento antiaderente e tampa de vidro."
},{ 
    nome: "Guarda-Roupa 3 Portas",
    preco: 550.00,
    imagem: "imagem/produto/GuardaRoupa.webp",
    descri: "Guarda-roupa com espelho, cabideiro e prateleiras internas, feito em MDF."
},{ 
    nome: "Jogo de Panelas Antiaderente 5 Peças",
    preco: 550.00,
    imagem: "imagem/produto/JogoAntiaderente.webp",
    descri: "Conjunto com panelas resistentes, cabos antitérmicos e tampa de vidro temperado."
},{ 
    nome: "Mesa para Computador Compacta",
    preco: 550.00,
    imagem: "imagem/produto/MesaComputador.webp",
    descri: "Mesa com estrutura em aço e tampo de MDF, ideal para home office e setups gamer."
},{ 
    nome: "Organizador de Temperos Giratório",
    preco: 550.00,
    imagem: "imagem/produto/OrganizadorTemperos.webp",
    descri: "Giratório 360º com frascos em vidro e suporte metálico compacto."
},{ 
    nome: "Rack para TV até 55",
    preco: 550.00,
    imagem: "imagem/produto/RackTV.webp",
    descri: "Rack moderno com espaço para eletrônicos e decoração, acabamento fosco."
}
  ];

// ✅ Gera ID incremental
produtos.forEach((p, i) => p.id = i + 1);


/************************************************************
 * 2) VARIÁVEIS GLOBAIS
 ************************************************************/

const PRODUTOS_POR_PAGINA = 24;
let indiceAtual = 0;

// ✅ Será definido após DOM carregar
let produtoLista = null;

// ✅ Modo de pagamento selecionado
let ModoSelecionar = "";

// ✅ Elementos do carrinho (podem ser null em páginas sem carrinho)
const contadorEl       = document.getElementById("contador")        || null;
const carrinhoItensEl  = document.getElementById("carrinho-itens")  || null;
const carrinhoTotalEl  = document.getElementById("carrinho-total")  || null;
const modalCarrinhoEl  = document.getElementById("modal-carrinho")  || null;
const btnPagarCarrinho = document.getElementById("carrinho-pagar")  || null;


/************************************************************
 * 3) CRIAÇÃO DOS CARDS DE PRODUTO
 ************************************************************/

function criarProdutoCard(produto) {
  const card = document.createElement('div');
  card.className = 'card-produto';
  card.tabIndex = 0;

  const img = document.createElement('img');
  img.src = produto.imagem;
  img.alt = produto.nome;
  img.addEventListener('click', () => abrirModalProduto(produto));
  card.appendChild(img);

  const titulo = document.createElement('h2');
  titulo.textContent = produto.nome;
  card.appendChild(titulo);

  const preco = document.createElement('span');
  preco.className = 'preco';
  preco.textContent =
    produto.preco.toLocaleString('pt-PT', { minimumFractionDigits: 2 }) + ' MT';
  card.appendChild(preco);

  const botao = document.createElement('button');
  botao.className = 'botao-pagar';
  botao.textContent = 'Comprar';
  botao.addEventListener('click', (e) => {
    e.stopPropagation();
    abrirModalProduto(produto);
  });
  card.appendChild(botao);

  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') abrirModalProduto(produto);
  });

  return card;
}


/************************************************************
 * 4) RENDERIZAÇÃO DOS PRODUTOS
 ************************************************************/

function renderizarProdutos(start, count) {
  if (!produtoLista) {
    console.warn("listaDoproduto não existe nesta página.");
    return;
  }

  const fim = Math.min(start + count, produtos.length);

  for (let i = start; i < fim; i++) {
    const card = criarProdutoCard(produtos[i]);
    produtoLista.appendChild(card);
  }

  indiceAtual = fim;
}

function carregarMaisProdutos() {
  if (indiceAtual >= produtos.length) return;

  const gatilho = document.getElementById('ver-mais');
  if (!gatilho) return;

  gatilho.style.transition = 'opacity 0.25s';
  gatilho.style.opacity = '0.6';

  setTimeout(() => {
    renderizarProdutos(indiceAtual, PRODUTOS_POR_PAGINA);
    gatilho.style.opacity = '0';
  }, 400);
}

function configurarRolagemInfinita() {
  const gatilho = document.getElementById('ver-mais');
  if (!gatilho) {
    console.warn("ver-mais não encontrado.");
    return;
  }

  const observador = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) carregarMaisProdutos();
  });

  observador.observe(gatilho);
}


/************************************************************
 * 5) MODAL DO PRODUTO
 ************************************************************/

function abrirModalProduto(produto) {
  window.produtoAtual = produto;

  const modal = document.getElementById('modal-produto');
  if (!modal) return;

  const img   = document.getElementById('modal-img');
  const nome  = document.getElementById('modal-nome');
  const desc  = document.getElementById('modal-descricao');
  const preco = document.getElementById('modal-preco');

  if (img)   img.src = produto.imagem;
  if (nome)  nome.textContent = produto.nome;
  if (desc)  desc.textContent = produto.descri || '';
  if (preco) preco.textContent =
    produto.preco.toLocaleString('pt-PT', { minimumFractionDigits: 2 }) + ' MT';

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  const fecharBtn   = document.getElementById('fechar-modal');
  const cancelarBtn = document.getElementById('modal-cancelar');
  const pagarBtn    = document.getElementById('modal-pagar');

  if (fecharBtn)   fecharBtn.onclick = fecharModalProduto;
  if (cancelarBtn) cancelarBtn.onclick = fecharModalProduto;

  if (pagarBtn) {
    pagarBtn.onclick = () => {
      if (!window.usuarioLogado) {
        fecharModalProduto();
        if (window.abrirModalAuth) window.abrirModalAuth();
        return;
      }

      adicionarAoCarrinho(produto.id);
      fecharModalProduto();
      if (window.abrirCarrinho) abrirCarrinho();
    };
  }
}

function fecharModalProduto() {
  const modal = document.getElementById('modal-produto');
  if (!modal) return;

  modal.style.display = 'none';
  document.body.style.overflow = '';
}

document.addEventListener('click', (event) => {
  const modal = document.getElementById('modal-produto');
  if (!modal) return;

  if (
    modal.style.display === 'flex' &&
    !event.target.closest('.modal-conteudo') &&
    !event.target.closest('.card-produto')
  ) {
    fecharModalProduto();
  }
});


/************************************************************
 * 6) BOTTOM SHEET (PAGAMENTO)
 ************************************************************/

function abrirSheet() {
  const bottom      = document.getElementById('bottomSheet');
  const overlay     = document.getElementById('overlay');
  const formulario  = document.getElementById("formulario");
  const campos      = document.getElementById("campos");
  const subTitle    = document.getElementById("subTitle");
  const btnContinuar = document.getElementById("btnContinuar");
  const btnVoltar   = document.getElementById("btnVoltar");
  const opcs        = document.getElementById("opcoes");
  const status      = document.getElementById("status");

  if (!bottom || !overlay) return;

  bottom.classList.add("aberta");
  overlay.classList.add("aberta");

  if (status) status.textContent = "";
  if (formulario) {
    formulario.classList.add("hidden");
    formulario.classList.remove("oculta", "formulario-anim");
  }
  if (campos) campos.innerHTML = "";
  if (subTitle) subTitle.textContent = "Escolha a forma de pagamento:";
  if (btnContinuar) btnContinuar.classList.add("hidden");
  if (btnVoltar) btnVoltar.classList.add("hidden");

  ModoSelecionar = "";

  if (opcs) {
    opcs.classList.remove("oculta", "hidden");
    Array.from(opcs.children).forEach(card => {
      card.classList.remove("selecionado");
      card.style.opacity = "";
      card.style.animation = "cardFadeIn 0.55s forwards";
    });
  }
}

function fecharSheet() {
  const bottom  = document.getElementById('bottomSheet');
  const overlay = document.getElementById('overlay');

  if (bottom)  bottom.classList.remove("aberta");
  if (overlay) overlay.classList.remove("aberta");
}

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('overlay');
  if (overlay) overlay.addEventListener('click', fecharSheet);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fecharSheet();
});


/************************************************************
 * 7) FORMULÁRIO DE PAGAMENTO
 ************************************************************/

function selecionarOpcao(metodo, event) {
  ModoSelecionar = metodo;

  Array.from(document.querySelectorAll(".cardPay"))
    .forEach(card => card.classList.remove("selecionado"));

  event.target.classList.add("selecionado");

  const btnContinuar = document.getElementById("btnContinuar");
  if (btnContinuar) {
    setTimeout(() => btnContinuar.classList.remove("hidden"), 180);
  }
}

function mostrarCampos() {
  const opcs        = document.getElementById("opcoes");
  const formulario  = document.getElementById("formulario");
  const btnContinuar = document.getElementById("btnContinuar");
  const btnVoltar   = document.getElementById("btnVoltar");
  const status      = document.getElementById("status");
  const campos      = document.getElementById("campos");
  const subTitle    = document.getElementById("subTitle");

  if (!opcs || !formulario || !campos || !subTitle) return;

  opcs.classList.add("oculta");
  setTimeout(() => opcs.classList.add("hidden"), 250);

  formulario.classList.remove("hidden");
  formulario.classList.add("formulario-anim");
  formulario.classList.remove("oculta");

  if (btnContinuar) btnContinuar.classList.add("hidden");
  if (btnVoltar) btnVoltar.classList.remove("hidden");
  if (status) status.textContent = "";

  campos.innerHTML = "";

  if (ModoSelecionar === "paypal") {
    campos.innerHTML = `
      <div class="container-input">
        <input type="email" placeholder="E-mail PayPal">
        <input type="password" placeholder="Senha">
        <input type="text" placeholder="Nome do titular da conta">
      </div>`;
    subTitle.textContent = "Insira os dados do PayPal:";
  }

  else if (ModoSelecionar === "visa") {
    campos.innerHTML = `
      <div class="container-input">
        <input type="text" inputmode="numeric" placeholder="Número do Cartão">
        <input type="month" placeholder="Validade">
        <input type="text" inputmode="numeric" maxlength="4" placeholder="CVV">
        <input type="text" placeholder="Nome no Cartão">
      </div>`;
    subTitle.textContent = "Insira os dados do Cartão Visa:";
  }

  else if (ModoSelecionar === "absa") {
    campos.innerHTML = `
      <div class="container-input">
        <input type="text" inputmode="numeric" placeholder="Número da Conta">
      </div>
      <p class="info-msg">
        Ao continuar, você será redirecionado para o ABSA Pay para autorizar o pagamento.
      </p>`;
    subTitle.textContent = "Pagamento via ABSA Pay";
  }

  else if (ModoSelecionar === "crypto") {
    campos.innerHTML = `
      <div class="container-input">
        <input type="text" placeholder="Endereço USDT / Binance ID">
        <input type="text" placeholder="Nome da carteira (opcional)">
        <input type="text" placeholder="Rede (ex: TRC20, ERC20)">
      </div>`;
    subTitle.textContent = "Insira o endereço USDT/Binance ID:";
  }

  else if (ModoSelecionar === "banco") {
    campos.innerHTML = `
      <div class="container-input">
        <input type="text" placeholder="Nome do banco">
        <input type="text" placeholder="Número da conta">
        <input type="text" placeholder="Tipo de conta">
        <input type="text" placeholder="Nome completo do titular">
      </div>`;
    subTitle.textContent = "Insira os dados:";
  }
}

function voltarEscolha() {
  const formulario  = document.getElementById("formulario");
  const opcoes      = document.getElementById("opcoes");
  const btnContinuar = document.getElementById("btnContinuar");
  const btnVoltar   = document.getElementById("btnVoltar");
  const status      = document.getElementById("status");
  const subTitle    = document.getElementById("subTitle");

  if (!formulario || !opcoes) return;

  formulario.classList.add("oculta");

  setTimeout(() => {
    formulario.classList.add("hidden");
    opcoes.classList.remove("oculta", "hidden");

    if (btnContinuar) btnContinuar.classList.remove("hidden");
    if (btnVoltar) btnVoltar.classList.add("hidden");
    if (status) status.textContent = "";
    if (subTitle) subTitle.textContent = "Escolha a forma de pagamento:";

    Array.from(document.querySelectorAll(".cardPay"))
      .forEach(card => card.classList.remove("selecionado"));

    ModoSelecionar = "";
  }, 330);
}

function confirmarPagamento() {
  const status = document.getElementById("status");
  if (!status) return;

  status.textContent = "Processando pagamento...";
  status.style.opacity = "1";

  setTimeout(() => {
    status.textContent = "Pagamento confirmado com sucesso!";
    status.style.opacity = "1";
    setTimeout(fecharSheet, 1200);
  }, 1800);
}


/************************************************************
 * 8) CARRINHO
 ************************************************************/

function carregarCarrinho() {
  const salvo = localStorage.getItem("carrinho");
  return salvo ? JSON.parse(salvo) : [];
}

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function sincronizarLocalStorage() {
  salvarCarrinho();
}

let carrinho = carregarCarrinho();

function atualizarContador() {
  if (!contadorEl) return;
  const total = carrinho.reduce((acc, p) => acc + p.qtd, 0);
  contadorEl.textContent = total;
}

function adicionarAoCarrinho(idproduto) {
  const produto = produtos.find(p => p.id === idproduto);
  if (!produto) return;

  const itemExistente = carrinho.find(p => p.id === produto.id);

  if (itemExistente) {
    itemExistente.qtd++;
  } else {
    carrinho.push({ ...produto, qtd: 1 });
  }

  atualizarContador();
  renderizarCarrinho();
  sincronizarLocalStorage();
}

function renderizarCarrinho() {
  if (!carrinhoItensEl || !carrinhoTotalEl) return;

  carrinhoItensEl.innerHTML = "";
  let total = 0;

  if (carrinho.length === 0) {
    carrinhoItensEl.innerHTML =
      `<p style="font-size:13px; color:#6b7280;">Seu carrinho está vazio.</p>`;
  }

  carrinho.forEach((item, index) => {
    total += item.preco * item.qtd;

    const linha = document.createElement("div");
    linha.className = "carrinho-card";
    linha.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}" class="carrinho-img" />
      <div class="carrinho-info">
        <div class="carrinho-info-nome">${item.nome}</div>
        <div class="carrinho-info-preco">
          ${item.preco.toLocaleString("pt-PT", { minimumFractionDigits: 2 })} MT
          <span style="color:#9ca3af;"> × ${item.qtd}</span>
        </div>
      </div>
      <div class="carrinho-controles">
        <div class="qtd-controle">
          <button onclick="alterarQtd(${index}, -1)">−</button>
          <span>${item.qtd}</span>
          <button onclick="alterarQtd(${index}, 1)">+</button>
        </div>
        <button class="btn-remover" onclick="removerItem(${index})">Remover</button>
      </div>
    `;
    carrinhoItensEl.appendChild(linha);
  });

  carrinhoTotalEl.textContent =
    total.toLocaleString('pt-PT', { minimumFractionDigits: 2 }) + " MT";
}

function alterarQtd(index, delta) {
  if (!carrinho[index]) return;

  carrinho[index].qtd += delta;
  if (carrinho[index].qtd <= 0) {
    carrinho.splice(index, 1);
  }

  atualizarContador();
  renderizarCarrinho();
  sincronizarLocalStorage();
}

function removerItem(index) {
  if (!carrinho[index]) return;
  carrinho.splice(index, 1);
  atualizarContador();
  renderizarCarrinho();
  sincronizarLocalStorage();
}

function limparCarrinho() {
  carrinho = [];
  atualizarContador();
  renderizarCarrinho();
  sincronizarLocalStorage();
}

function abrirCarrinho() {
  if (!modalCarrinhoEl) return;
  renderizarCarrinho();
  modalCarrinhoEl.classList.add('visivel');
}

function fecharCarrinho() {
  if (!modalCarrinhoEl) return;
  modalCarrinhoEl.classList.remove('visivel');
}

if (btnPagarCarrinho) {
  btnPagarCarrinho.onclick = () => {
    if (carrinho.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }

    if (!window.usuarioLogado) {
      fecharCarrinho();
      setTimeout(() => {
        if (window.abrirModalAuth) window.abrirModalAuth();
      }, 150);
      return;
    }

    abrirSheet();
  };
}


/************************************************************
 * 9) INICIALIZAÇÃO GERAL
 ************************************************************/

document.addEventListener("DOMContentLoaded", () => {
  // ✅ Lista de produtos
  produtoLista = document.getElementById('listaDoproduto');

  if (produtoLista) {
    renderizarProdutos(0, PRODUTOS_POR_PAGINA);
    configurarRolagemInfinita();
  }

  // ✅ Carrinho (contador e render inicial)
  atualizarContador();
  renderizarCarrinho();
});

 if (typeof abrirCarrinho === "function") {
    window.abrirCarrinho = abrirCarrinho;
  }
  if (typeof fecharCarrinho === "function") {
    window.fecharCarrinho = fecharCarrinho;
  }
  if (typeof adicionarAoCarrinho === "function") {
    window.adicionarAoCarrinho = adicionarAoCarrinho;
  }
  if (typeof removerDoCarrinho === "function") {
    window.removerDoCarrinho = removerDoCarrinho;
  }
  if (typeof atualizarContador === "function") {
    window.atualizarContador = atualizarContador;
  }
  if (typeof renderizarCarrinho === "function") {
    window.renderizarCarrinho = renderizarCarrinho;
  }
  if (typeof limparCarrinho === "function") {
    window.limparCarrinho = limparCarrinho;
  }
  if (typeof esvaziarCarrinho === "function") {
    window.esvaziarCarrinho = esvaziarCarrinho;
  }
  if (typeof finalizarCompra === "function") {
    window.finalizarCompra = finalizarCompra;
  }
  if (typeof irParaPagamento === "function") {
    window.irParaPagamento = irParaPagamento;
  }

  // Modal de produto
  if (typeof abrirModalProduto === "function") {
    window.abrirModalProduto = abrirModalProduto;
  }
  if (typeof fecharModalProduto === "function") {
    window.fecharModalProduto = fecharModalProduto;
  }

  // Bottom sheet / pagamento
  if (typeof abrirBottomSheet === "function") {
    window.abrirBottomSheet = abrirBottomSheet;
  }
  if (typeof fecharBottomSheet === "function") {
    window.fecharBottomSheet = fecharBottomSheet;
  }
  if (typeof confirmarPagamento === "function") {
    window.confirmarPagamento = confirmarPagamento;
  }
  if (typeof selecionarMetodoPagamento === "function") {
    window.selecionarMetodoPagamento = selecionarMetodoPagamento;
  }
  if (typeof voltarEscolha === "function") {
    window.voltarEscolha = voltarEscolha;
  }
  if (typeof mostrarCampos === "function") {
    window.mostrarCampos = mostrarCampos;
  }
  if (typeof selecionarOpcao === "function") {
    window.selecionarOpcao = selecionarOpcao;
  }
  
 }