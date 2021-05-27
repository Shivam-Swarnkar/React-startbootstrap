import React from "react";

import "./Style.css";
import cabin from "./assets/img/portfolio/cabin.png";
import cake from "./assets/img/portfolio/cake.png";
import circus from "./assets/img/portfolio/circus.png";
import game from "./assets/img/portfolio/game.png";
import safe from "./assets/img/portfolio/safe.png";
import submarine from "./assets/img/portfolio/submarine.png";
import PortfolioModalSingle from "./PortfolioModalSingle";

const PortfolioModal = () =>
    (
        <div>
            <PortfolioModalSingle modalId="portfolioModal1" title="Log Cabin" titleId="portfolioModal1Label" imgSrc={cabin} />

            <PortfolioModalSingle modalId="portfolioModal2" title="Tasty Cake" titleId="portfolioModal2Label" imgSrc={cake} />

            <PortfolioModalSingle modalId="portfolioModal3" title="Circus Tent" titleId="portfolioModal3Label" imgSrc={circus} />

            <PortfolioModalSingle modalId="portfolioModal4" title="Controller" titleId="portfolioModal4Label" imgSrc={game} />

            <PortfolioModalSingle modalId="portfolioModal5" title="Locked Safe" titleId="portfolioModal5Label" imgSrc={safe} />

            <PortfolioModalSingle modalId="portfolioModal6" title="Submarine" titleId="portfolioModal6Label" imgSrc={submarine} />

        </div>
    );

export default PortfolioModal;