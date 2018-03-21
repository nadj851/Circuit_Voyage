-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mer. 21 mars 2018 à 19:11
-- Version du serveur :  5.7.17
-- Version de PHP :  5.6.30

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

--
-- Déchargement des données de la table `adresse`
--

INSERT INTO `adresse` (`idAdresse`, `ville`, `codePostale`, `pays`) VALUES
(1, 'testville', 'testcode', 'algerie'),
(2, 'alger', 'w1w1w1', NULL),
(3, '', '', NULL),
(4, 'alger', 'w1w1w1', NULL),
(5, 'alger', 'w1w1w1', NULL),
(6, 'alger', 'w1w1w1', NULL),
(7, 'rio', 'w1w1w1w', 'AR'),
(8, 'melbourne', 'a1a1a1a', 'AT'),
(9, 'melbourne', 'a1a1a1a', 'AT'),
(10, '', '', ''),
(11, '', '', ''),
(12, '', '', ''),
(13, 'alger', 'w1w1w1', 'DZ'),
(14, 'alger', 'w1w1w1', 'DZ'),
(15, 'alger', 'w1w1w1', 'DZ'),
(16, 'alo', 'a12a12', 'BY'),
(17, 'alo', 'a12a12', 'BY'),
(18, 'alo', 'a12a12', 'BY'),
(19, 'alo', 'a12a12', 'BY'),
(20, 'alo', 'asdasd', 'BS'),
(21, 'alo', 'aaaaaa', 'AT'),
(22, '', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `banner`
--

CREATE TABLE `banner` (
  `banner_id` int(11) NOT NULL,
  `banner_title` varchar(200) NOT NULL,
  `banner_image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `banner`
--

INSERT INTO `banner` (`banner_id`, `banner_title`, `banner_image`) VALUES
(1, 'Banner 1', 'banner-1.jpg'),
(2, 'Banner 2', 'banner-2.jpg'),
(3, 'Banner 3', 'banner-3.jpg'),
(4, 'Banner 4', 'banner-4.jpg'),
(5, 'Banner 5', 'banner-5.jpg');

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
  `idAdresse` int(11) NOT NULL,
  `idPasspor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `participants`
--

INSERT INTO `participants` (`idparticipants`, `nom`, `prenom`, `courriel`, `sexe`, `tel`, `idAdresse`, `idPasspor`) VALUES
(1, 'alo', 'malo', 'a@g.com', 'Homme', NULL, 1, 1),
(2, 'mal', 'al', 'a@gmail.com', 'Homme', '133456789', 17, 2),
(3, 'mal', 'al', 'a@gmail.com', 'Homme', '133456789', 18, 3),
(4, 'mal', 'al', 'a@gmail.com', 'Homme', '133456789', 19, 4),
(5, 'larkem', 'nadjib', 'a@gmail.com', 'Homme', '123456', 20, 5),
(6, 'nadjib', 'larkem', 'a@a.com', 'Homme', '123456789', 21, 6);

-- --------------------------------------------------------

--
-- Structure de la table `passeport`
--

CREATE TABLE `passeport` (
  `idPasspor` int(11) NOT NULL,
  `numeroPass` int(50) NOT NULL,
  `dateDelivPass` date NOT NULL,
  `dateExpiration` date NOT NULL,
  `nationalites` varchar(100) DEFAULT NULL,
  `lieuDeliv` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `passeport`
--

INSERT INTO `passeport` (`idPasspor`, `numeroPass`, `dateDelivPass`, `dateExpiration`, `nationalites`, `lieuDeliv`) VALUES
(1, 0, '0000-00-00', '0000-00-00', 'algerie', 'alger'),
(2, 1234562365, '2015-01-01', '2020-01-01', 'alo', 'alo'),
(3, 1234562365, '2015-01-01', '2020-01-01', 'alo', 'alo'),
(4, 1234562365, '2015-01-01', '2020-01-01', 'alo', 'alo'),
(5, 123456789, '2015-01-01', '2020-01-01', 'alger', 'alo'),
(6, 123456789, '2015-01-01', '2020-01-01', 'alger', 'alger');

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
  `description` varchar(256) DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `thematique`
--

INSERT INTO `thematique` (`idThematique`, `nom`, `description`, `image`) VALUES
(11, 'Oceanie', 'ffzfzfzfzz', 'a0f1e055bde100cc799d036ede688d6b9ef8ee5f.jpg'),
(13, 'Pacifique', 'zfzz', '03e249731897c59c0c75e0cb0e9cc1fa3ef57403.jpg'),
(14, 'Europe', 'qszf', '3a85dba78f53862dbf6321135088987a61968b8b.jpg'),
(15, 'Afrique', 'qszf', '03434e9348bed1b93193ef2c29e9ed697a2d78cc.jpg'),
(16, 'Antilles', 'qszf', 'e5dfef216dc2aa856d78116320b8a5b959a5b2e1.jpg'),
(17, 'Capitales', 'qszf', '8fec20818bcb9334ebfee5e45dc3657f3185aaae.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `display_name` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `first_name`, `last_name`, `display_name`, `email`, `password`) VALUES
(1, 'Jay', 'Pabs', 'jaypabs', 'asdf@gmail.com', '202cb962ac59075b964b07152d234b70'),
(2, 'nadjib', 'larkem', 'nadj851', 'nadjiblar@hotmail.fr', '21232f297a57a5a743894a0e4a801fc3'),
(3, 'NONO', 'LOLO', 'nadj851', 'naar8@hotmail.com', '202cb962ac59075b964b07152d234b70'),
(4, 'admin', 'admin', 'admin', 'admin@admin.com', '21232f297a57a5a743894a0e4a801fc3'),
(5, 'nana', 'lala', 'jas', 'jas@hotmail.com', '202cb962ac59075b964b07152d234b70'),
(6, 'nadjib', 'larkem', 'nadjib', 'nadjib@hotmail.com', '202cb962ac59075b964b07152d234b70'),
(7, 'lara', 'mara', 'lara', 'lara@hotmail.com', '202cb962ac59075b964b07152d234b70'),
(8, 'haha', 'lala', 'lala', 'lala@hotmail.com', '202cb962ac59075b964b07152d234b70'),
(9, 'ahcen', 'boutaghane', 'haswen', 'eee@d.com', '96e79218965eb72c92a549dd5a330112'),
(10, 'nasd', 'dwdw', 'fwfwf', 'n@hotmail.fr33', '698d51a19d8a121ce581499d7b701668'),
(11, 'ahcen', 'boutaghane', 'ere', 'nadjiblar@h1otmaill.fr', '698d51a19d8a121ce581499d7b701668'),
(12, 'ahcen', 'boutaghane', 'haswen', 'nad111jiblar@hotmaill.fr', '698d51a19d8a121ce581499d7b701668'),
(13, '1', '1', '1', '1', 'c4ca4238a0b923820dcc509a6f75849b');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `adresse`
--
ALTER TABLE `adresse`
  ADD PRIMARY KEY (`idAdresse`);

--
-- Index pour la table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`banner_id`);

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
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `adresse`
--
ALTER TABLE `adresse`
  MODIFY `idAdresse` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT pour la table `banner`
--
ALTER TABLE `banner`
  MODIFY `banner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
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
  MODIFY `idparticipants` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `passeport`
--
ALTER TABLE `passeport`
  MODIFY `idPasspor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
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
  MODIFY `idThematique` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
