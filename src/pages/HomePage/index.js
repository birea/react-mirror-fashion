import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from '../../assets/logo.png';
import Destaque from '../../assets/destaque-home.png';
import Miniatura1 from '../../assets/miniatura1.png';
import Miniatura2 from '../../assets/miniatura2.png';
import Miniatura3 from '../../assets/miniatura3.png';
import Miniatura4 from '../../assets/miniatura4.png';
import Miniatura5 from '../../assets/miniatura5.png';
import Miniatura6 from '../../assets/miniatura6.png';
import Rodape from '../../assets/logo-rodape.png';

import './index.css';
import '../../reset.css';

export default function HomePage() {
    return(
        <div className="home-container">
            <header>
                <h1><img src={Logo} alt="Logo da Mirror Fashion"></img></h1>

                <p className="sacola">
                    Nenhum item na sacola de compras
                </p>

                <nav className="menu-opcoes">
                    <ul>
                        <li><a href="#">Sua Conta</a></li>
                        <li><a href="#">Lista de Desejos</a></li>
                        <li><a href="#">Cartão Fidelidade</a></li>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Ajuda</a></li>
                    </ul>
                </nav>
            </header>

            <div className="destaque-container">
                <section className="busca">
                    <h2>Busca</h2>

                    <form>
                        <input type="search"></input>
                        <button>Buscar</button>
                    </form>
                </section>

                <section className="menu-departamentos">
                    <h2>Departamentos</h2>

                    <nav>
                        <ul>
                            <li>
                                <a	href="produto.html">Blusas e Camisas</a>
                                <ul>
                                    <li><a href="#">Manga Curta</a></li>
                                    <li><a href="#">Manga Comprida</a></li>
                                    <li><a href="#">Camisa social</a></li>
                                    <li><a href="#">Camisa casual</a></li>
                                </ul>
                            </li>
						    <li><a	href="produto.html">Calças</a></li>
							<li><a	href="produto.html">Saias</a></li>
							<li><a	href="produto.html">Vestidos</a></li>
							<li><a	href="produto.html">Sapatos</a></li>
							<li><a	href="produto.html">Bolsas	e Carteiras</a></li>
							<li><a	href="produto.html">Acessórios</a></li>
                        </ul>
                    </nav>
                </section>

                <section className="banner-destaque">
                    <figure>
                        <img src={Destaque} alt="Promoção Big City Nigth"></img>    
                    </figure>
                </section>
            </div>

            <div className="container paineis">
                <section className="painel novidades">
                    <h2>Novidades</h2>
                    <ol>
                        <li>
                            {/* Primeiro produto */}
                            <a href="produto.html">
                                <figure>
                                    <img src={Miniatura1} alt="miniatura1"></img>
                                    <figcaption>Fuzz Cardigan por R$ 129,90</figcaption>
                                </figure>
                            </a>
                        </li>
                        {/* Fim Do Primeiro produto */}
                        <li>
                            <a href="produto.html">
                                <figure>
                                    <img src={Miniatura2} alt="miniatura2"></img>
                                    <figcaption>Camiseta Azul por R$ 50,90</figcaption>
                                </figure>
                            </a>
                        </li>
                        <li>
                            <a href="produto.html">
                                <figure>
                                    <img src={Miniatura3} alt="miniatura3"></img>
                                    <figcaption>Casaco Verde por R$ 100,00</figcaption>
                                </figure>
                            </a>
                        </li>
                        <li>
                            <a href="produto.html">
                                <figure>
                                    <img src={Miniatura4} alt="miniatura4"></img>
                                    <figcaption>Swetter por R$ 89,90</figcaption>
                                </figure>
                            </a>
                        </li>
                        <li>
                            <a href="produto.html">
                                <figure>
                                    <img src={Miniatura5} alt="miniatura5"></img>
                                    <figcaption>Camiseta de academia por R$ 29,90</figcaption>
                                </figure>
                            </a>
                        </li>
                        <li>
                            <a href="produto.html">
                                <figure>
                                    <img src={Miniatura6} alt="miniatura6"></img>
                                    <figcaption>Camiseta Rosa por R$ 15,90</figcaption>
                                </figure>
                            </a>
                        </li>
                    </ol>
                </section>
                <section className="painel mais-vendidos">
                    <h2>Mais Vendidos</h2>
                    <ol>
                        <li>
                            <a href="produto.html">
                                <figure>
                                    <img src={Miniatura1} alt="foto1"></img>
                                    <figcaption>Camiseta Rosa por R$ 15,90</figcaption>
                                </figure>
                            </a>
                        </li>
                        <li>
                            <a href="produto.html">
                                <figure>
                                    <img src={Miniatura2} alt="foto1"></img>
                                    <figcaption>Camiseta Rosa por R$ 15,90</figcaption>
                                </figure>
                            </a>
                        </li>
                        <li>
                            <a href="produto.html">
                                <figure>
                                    <img src={Miniatura3} alt="foto2"></img>
                                    <figcaption>Camiseta Rosa por R$ 15,90</figcaption>
                                </figure>
                            </a>
                        </li>
                        <li>
                            <a href="produto.html">
                                <figure>
                                    <img src={Miniatura4} alt="foto3"></img>
                                    <figcaption>Camiseta Rosa por R$ 15,90</figcaption>
                                </figure>
                            </a>
                        </li>
                        <li>
                            <a href="produto.html">
                                <figure>
                                    <img src={Miniatura5} alt="foto4"></img>
                                    <figcaption>Camiseta Rosa por R$ 15,90</figcaption>
                                </figure>
                            </a>
                        </li>
                        <li>
                            <a href="produto.html">
                                <figure>
                                    <img src={Miniatura6} alt="foto5"></img>
                                    <figcaption>Camiseta Rosa por R$ 15,90</figcaption>
                                </figure>
                            </a>
                        </li>
                    </ol>
                </section>
                <footer>
                    <div className="container">
                        <img src={Rodape} alt="Logo da Mirror Fashion"></img>
                        <ul className="social">
                            <li id="facebook"><FaFacebook size={30} color="blue"/></li>
                            <li id="twitter"><FaTwitter size={30} color="white" /></li>
                            <li><FaInstagram size={30} color="#FF1493"/></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    );
}
