-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  lun. 12 mars 2018 à 22:21
-- Version du serveur :  5.7.17
-- Version de PHP :  7.1.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `munarela`
--
CREATE DATABASE IF NOT EXISTS `munarela` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `munarela`;

-- --------------------------------------------------------

--
-- Structure de la table `adresse`
--

CREATE TABLE `adresse` (
  `idAdresse` int(11) NOT NULL,
  `ville` varchar(100) DEFAULT NULL,
  `codePostale` varchar(45) DEFAULT NULL,
  `pays` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `circuit`
--

CREATE TABLE `circuit` (
  `idCircuit` int(11) NOT NULL,
  `titre` varchar(45) DEFAULT NULL,
  `dateDeDepart` timestamp(6) NULL DEFAULT NULL,
  `dateDeRetour` timestamp(6) NULL DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL,
  `prix` float DEFAULT NULL,
  `thématique` varchar(256) DEFAULT NULL,
  `imageCircuit` varchar(256) DEFAULT NULL,
  `guide` varchar(256) DEFAULT NULL,
  `villeDepart` varchar(256) DEFAULT NULL,
  `idPromotion` int(11) NOT NULL,
  `idThematique` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `etape`
--

CREATE TABLE `etape` (
  `idEtape` int(11) NOT NULL,
  `nomEtape` varchar(256) DEFAULT NULL,
  `duree` int(11) DEFAULT NULL,
  `repas` varchar(45) DEFAULT NULL,
  `idCircuit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `hotels`
--

CREATE TABLE `hotels` (
  `idHotels` int(11) NOT NULL,
  `nom` varchar(256) DEFAULT NULL,
  `urlHotel` varchar(256) DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `jour`
--

CREATE TABLE `jour` (
  `idJour` int(11) NOT NULL,
  `description` varchar(256) DEFAULT NULL,
  `nomhotel` varchar(256) DEFAULT NULL,
  `idEtape` int(11) NOT NULL,
  `dejeuner` varchar(100) NOT NULL,
  `diner` varchar(100) NOT NULL,
  `souper` varchar(100) NOT NULL,
  `idRestaurant` int(11) NOT NULL,
  `idHotels` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `paiement`
--

CREATE TABLE `paiement` (
  `idPaiement` int(11) NOT NULL,
  `datePaiment` timestamp(6) NULL DEFAULT NULL,
  `montanttPaiment` float DEFAULT NULL,
  `idReservation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `panier`
--

CREATE TABLE `panier` (
  `idPanier` int(11) NOT NULL,
  `idUtilisateur` int(11) NOT NULL,
  `idCircuit` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `participants`
--

CREATE TABLE `participants` (
  `idparticipants` int(11) NOT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `courriel` varchar(256) DEFAULT NULL,
  `sexe` varchar(45) DEFAULT NULL,
  `tel` varchar(100) DEFAULT NULL,
  `fax` varchar(100) DEFAULT NULL,
  `idAdresse` int(11) NOT NULL,
  `idPasspor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `passeport`
--

CREATE TABLE `passeport` (
  `idPasspor` int(11) NOT NULL,
  `dateDelivPassor` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `nationalites` varchar(100) DEFAULT NULL,
  `lieuDeliv` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `promotion`
--

CREATE TABLE `promotion` (
  `idPromotion` int(11) NOT NULL,
  `taux` float DEFAULT NULL,
  `datedebut` timestamp(6) NULL DEFAULT NULL,
  `datefin` timestamp(6) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE `reservation` (
  `idReservation` int(11) NOT NULL,
  `montanTotal` float DEFAULT NULL,
  `nbrPlaceDispo` int(11) DEFAULT NULL,
  `nbrAdult` int(11) DEFAULT NULL,
  `nbrEnfMTrois` int(11) DEFAULT NULL,
  `NbrEnfBTroisONZ` int(11) DEFAULT NULL,
  `Etat` varchar(45) DEFAULT NULL,
  `nPaiment` varchar(45) DEFAULT NULL,
  `datePaiment` timestamp(6) NULL DEFAULT NULL,
  `idUtilisateur` int(11) NOT NULL,
  `idCircuit` int(11) NOT NULL,
  `idPanier` int(11) NOT NULL,
  `solde` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `reservationparticipant`
--

CREATE TABLE `reservationparticipant` (
  `idParticipants` int(11) NOT NULL,
  `idReservation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `restaurant`
--

CREATE TABLE `restaurant` (
  `idRestaurant` int(11) NOT NULL,
  `nom` varchar(256) DEFAULT NULL,
  `url` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `thematique`
--

CREATE TABLE `thematique` (
  `idThematique` int(11) NOT NULL,
  `nom` varchar(45) DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `idUtilisateur` int(11) NOT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `motDePasse` varchar(256) DEFAULT NULL,
  `courriel` varchar(64) DEFAULT NULL,
  `actif` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `adresse`
--
ALTER TABLE `adresse`
  ADD PRIMARY KEY (`idAdresse`);

--
-- Index pour la table `circuit`
--
ALTER TABLE `circuit`
  ADD PRIMARY KEY (`idCircuit`,`idThematique`),
  ADD KEY `fk_Circuit_Promotion1_idx` (`idPromotion`),
  ADD KEY `fk_Circuit_Thematique1_idx` (`idThematique`);

--
-- Index pour la table `etape`
--
ALTER TABLE `etape`
  ADD PRIMARY KEY (`idEtape`,`idCircuit`),
  ADD KEY `fk_Etape_Circuit1_idx` (`idCircuit`);

--
-- Index pour la table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`idHotels`);

--
-- Index pour la table `jour`
--
ALTER TABLE `jour`
  ADD PRIMARY KEY (`idJour`,`idEtape`,`dejeuner`,`diner`,`souper`),
  ADD KEY `fk_Jour_Etape1_idx` (`idEtape`),
  ADD KEY `fk_Jour_Restaurant1_idx` (`idRestaurant`),
  ADD KEY `fk_Jour_Hotels1_idx` (`idHotels`);

--
-- Index pour la table `paiement`
--
ALTER TABLE `paiement`
  ADD PRIMARY KEY (`idPaiement`),
  ADD KEY `fk_Paiement_Reservation1_idx` (`idReservation`);

--
-- Index pour la table `panier`
--
ALTER TABLE `panier`
  ADD PRIMARY KEY (`idPanier`),
  ADD KEY `fk_Panier_Utilisateur1_idx` (`idUtilisateur`);

--
-- Index pour la table `participants`
--
ALTER TABLE `participants`
  ADD PRIMARY KEY (`idparticipants`),
  ADD KEY `fk_participants_Adresse1_idx` (`idAdresse`),
  ADD KEY `fk_participants_Passeport1_idx` (`idPasspor`);

--
-- Index pour la table `passeport`
--
ALTER TABLE `passeport`
  ADD PRIMARY KEY (`idPasspor`);

--
-- Index pour la table `promotion`
--
ALTER TABLE `promotion`
  ADD PRIMARY KEY (`idPromotion`);

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`idReservation`,`idUtilisateur`,`idCircuit`),
  ADD KEY `fk_Reservation_Utilisateur_idx` (`idUtilisateur`),
  ADD KEY `fk_Reservation_Circuit1_idx` (`idCircuit`),
  ADD KEY `fk_Reservation_Panier1_idx` (`idPanier`);

--
-- Index pour la table `reservationparticipant`
--
ALTER TABLE `reservationparticipant`
  ADD PRIMARY KEY (`idReservation`,`idParticipants`),
  ADD KEY `fk_ReservationParticipant_participants1_idx` (`idParticipants`);

--
-- Index pour la table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`idRestaurant`);

--
-- Index pour la table `thematique`
--
ALTER TABLE `thematique`
  ADD PRIMARY KEY (`idThematique`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`idUtilisateur`),
  ADD UNIQUE KEY `CourrielUtilisateur_UNIQUE` (`courriel`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `adresse`
--
ALTER TABLE `adresse`
  MODIFY `idAdresse` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `circuit`
--
ALTER TABLE `circuit`
  MODIFY `idCircuit` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `etape`
--
ALTER TABLE `etape`
  MODIFY `idEtape` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `idHotels` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `jour`
--
ALTER TABLE `jour`
  MODIFY `idJour` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `paiement`
--
ALTER TABLE `paiement`
  MODIFY `idPaiement` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `panier`
--
ALTER TABLE `panier`
  MODIFY `idPanier` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `participants`
--
ALTER TABLE `participants`
  MODIFY `idparticipants` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `passeport`
--
ALTER TABLE `passeport`
  MODIFY `idPasspor` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `promotion`
--
ALTER TABLE `promotion`
  MODIFY `idPromotion` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `idReservation` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `idRestaurant` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `thematique`
--
ALTER TABLE `thematique`
  MODIFY `idThematique` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `idUtilisateur` int(11) NOT NULL AUTO_INCREMENT;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


--
-- Table structure for table banner
--

CREATE TABLE IF NOT EXISTS banner (
  banner_id int(11) NOT NULL,
  banner_title varchar(200) NOT NULL,
  banner_image varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table banner
--

INSERT INTO banner (banner_id, banner_title, banner_image) VALUES
(1, 'Banner 1', 'banner-1.jpg'),
(2, 'Banner 2', 'banner-2.jpg'),
(3, 'Banner 3', 'banner-3.jpg'),
(4, 'Banner 4', 'banner-4.jpg'),
(5, 'Banner 5', 'banner-5.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table banner
--
ALTER TABLE banner
  ADD PRIMARY KEY (banner_id);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table banner
--
ALTER TABLE banner
  MODIFY banner_id int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
