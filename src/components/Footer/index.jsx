import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import useWindowWidth from "../WindowWidth/index";

import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import youtube from "../../assets/icon-youtube.svg";
import linkedin from "../../assets/icon-linkedin.svg";
import visa from "../../assets/flag-visa.svg";
import mastercard from "../../assets/flag-mastercard.svg";
import vtex from "../../assets/logo-vtex.svg";
import maeztra from "../../assets/logo-maeztra.svg";

import "./style.scss";

const Footer = () => {
    const { width } = useWindowWidth();
    const AccordionClasses = {
        root: "footer-accordions-item",
        expanded: "footer-accordions-item--expanded",
    };

    const SummaryClasses = {
        root: "footer-accordions-item-summary",
        content: "footer-accordions-item-summary-content",
        expanded: "footer-accordions-item-summary-content--expanded",
    };

    const DetailsClasses = {
        root: "footer-accordions-item-details",
        expanded: "footer-accordions-item-details--expanded",
    };

    return (
        <footer className="footer">
            <div className="footer-newsletter">
                <div className="container-footer">
                    <h2>Recebe Nossa Newsletter</h2>
                    <div className="footer-newsletter-form">
                        <input type="email" placeholder="Digite seu e-mail" />
                        <button title="Enviar">Enviar</button>
                    </div>
                </div>
            </div>

            {width < 1024 ? (
                <div className="footer-accordions container-footer">
                    <Accordion disableGutters="true" classes={AccordionClasses}>
                        <AccordionSummary classes={SummaryClasses}>
                            <p>Informações</p>
                            <div className="footer-accordions-item-summary-content-icon" />
                        </AccordionSummary>
                        <AccordionDetails classes={DetailsClasses}>
                            <a href="/" title="Quem somos">
                                Quem somos
                            </a>
                            <a href="/" title="Prazo de Envio">
                                Prazo de Envio
                            </a>
                            <a href="/" title="Trocas e Devoluções">
                                Trocas e Devoluções
                            </a>
                            <a href="/" title="Promoções e Cupons">
                                Promoções e Cupons
                            </a>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion disableGutters="true" classes={AccordionClasses}>
                        <AccordionSummary classes={SummaryClasses}>
                            <p>Minha Conta</p>
                            <div className="footer-accordions-item-summary-content-icon" />
                        </AccordionSummary>
                        <AccordionDetails classes={DetailsClasses}>
                            <a href="/" title="Minha Conta">
                                Minha Conta
                            </a>
                            <a href="/" title="Meus Pedidos">
                                Meus Pedidos
                            </a>
                            <a href="/" title="Cadastre-se">
                                Cadastre-se
                            </a>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion disableGutters="true" classes={AccordionClasses}>
                        <AccordionSummary classes={SummaryClasses}>
                            <p>Onde nos Encontrar</p>
                            <div className="footer-accordions-item-summary-content-icon" />
                        </AccordionSummary>
                        <AccordionDetails classes={DetailsClasses}>
                            <a href="/" title="Lojas">
                                Lojas
                            </a>
                            <a href="/" title="Endereço">
                                Endereço
                            </a>
                        </AccordionDetails>
                    </Accordion>
                </div>
            ) : (
                <div className="footer-links container-footer">
                    <div className="footer-links-column">
                        <p>Informações</p>
                        <div className="footer-links-column-anchors">
                            <a href="/" title="Quem somos">
                                Quem somos
                            </a>
                            <a href="/" title="Prazo de Envio">
                                Prazo de Envio
                            </a>
                            <a href="/" title="Trocas e Devoluções">
                                Trocas e Devoluções
                            </a>
                            <a href="/" title="Promoções e Cupons">
                                Promoções e Cupons
                            </a>
                        </div>
                    </div>

                    <div className="footer-links-column">
                        <p>Minha Conta</p>
                        <div className="footer-links-column-anchors">
                            <a href="/" title="Minha Conta">
                                Minha Conta
                            </a>
                            <a href="/" title="Meus Pedidos">
                                Meus Pedidos
                            </a>
                            <a href="/" title="Cadastre-se">
                                Cadastre-se
                            </a>
                        </div>
                    </div>

                    <div className="footer-links-column">
                        <p>Onde nos Encontrar</p>
                        <div className="footer-links-column-anchors">
                            <a href="/" title="Lojas">
                                Lojas
                            </a>
                            <a href="/" title="Endereço">
                                Endereço
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom">
                        <div className="footer-bottom-social">
                            <a
                                href="/"
                                title="Facebook"
                                className="footer-bottom-social-icon"
                            >
                                <img src={facebook} alt="Facebook" />
                            </a>
                            <a
                                href="/"
                                title="Linkedin"
                                className="footer-bottom-social-icon"
                            >
                                <img src={linkedin} alt="Linkedin" />
                            </a>
                            <a
                                href="/"
                                title="Instagram"
                                className="footer-bottom-social-icon"
                            >
                                <img src={instagram} alt="Instagram" />
                            </a>
                            <a
                                href="/"
                                title="Youtube"
                                className="footer-bottom-social-icon"
                            >
                                <img src={youtube} alt="Youtube" />
                            </a>
                        </div>
                        <div className="footer-bottom-payment">
                            <img src={visa} alt="Visa" />
                            <img src={mastercard} alt="Mastercard" />
                            <img src={visa} alt="Visa" />
                            <img src={mastercard} alt="Mastercard" />
                        </div>
                        <div className="footer-bottom-organizers">
                            <div className="footer-bottom-organizers-powered">
                                <p>Powered by</p>
                                <img src={vtex} alt="VTEX" />
                            </div>
                            <div className="footer-bottom-organizers-developed">
                                <p>Developed by</p>
                                <img src={maeztra} alt="Maeztra" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
