import { Modal } from "@mui/material";
import { useState } from "react";

import useWindowWidth from "../WindowWidth/index";

import banner from "../../assets/smart-news.png";
import mail from "../../assets/icon-mail.svg";
import airplane from "../../assets/icon-airplane.svg";

import "./style.scss";

const PopUpNews = () => {
    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);

    const { width } = useWindowWidth();

    const classes = {
        root: "PopUpNews",
        hidden: "PopUpNews--hidden",
    };

    return (
        <Modal open={open} onClose={handleClose} classes={classes}>
            <div className="PopUpNews-content">
                <button
                    className="PopUpNews-content-close"
                    onClick={handleClose}
                >
                    FECHAR
                </button>
                <div className="PopUpNews-content-container">
                    {width > 1024 && (
                        <div className="PopUpNews-content-container-image">
                            <img src={banner} width="426" alt="PopUpNews" />
                        </div>
                    )}

                    <div className="PopUpNews-content-container-infos">
                        <div className="PopUpNews-content-container-infos-icon">
                            <img src={mail} alt="Ícone de e-mail" />
                        </div>
                        <div className="PopUpNews-content-container-infos-welcome">
                            <p>Bem Vindo à MAEZTRA</p>
                        </div>
                        <div className="PopUpNews-content-container-infos-text">
                            <p>
                                Receba em Primeira mão
                                <br />
                                <b>desconto e ofertas exclusivas</b>
                            </p>
                        </div>
                        <div className="PopUpNews-content-container-infos-form">
                            <input
                                type="email"
                                placeholder="Digite seu e-mail"
                            />
                            <button title="Enviar">
                                ENVIAR
                                <img src={airplane} alt="Ícone de avião" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default PopUpNews;
