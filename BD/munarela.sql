-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Lun 19 Mars 2018 à 20:32
-- Version du serveur :  5.6.15-log
-- Version de PHP :  5.5.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `munarela`
--
CREATE DATABASE IF NOT EXISTS `munarela` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `munarela`;

-- --------------------------------------------------------

--
-- Structure de la table `adresse`
--

CREATE TABLE IF NOT EXISTS `adresse` (
  `idAdresse` int(11) NOT NULL AUTO_INCREMENT,
  `ville` varchar(100) DEFAULT NULL,
  `codePostale` varchar(45) DEFAULT NULL,
  `pays` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idAdresse`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=22 ;

--
-- Contenu de la table `adresse`
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
(21, 'alo', 'aaaaaa', 'AT');

-- --------------------------------------------------------

--
-- Structure de la table `banner`
--

CREATE TABLE IF NOT EXISTS `banner` (
  `banner_id` int(11) NOT NULL AUTO_INCREMENT,
  `banner_title` varchar(200) NOT NULL,
  `banner_image` varchar(200) NOT NULL,
  PRIMARY KEY (`banner_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Contenu de la table `banner`
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

CREATE TABLE IF NOT EXISTS `circuit` (
  `idCircuit` int(11) NOT NULL AUTO_INCREMENT,
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
  `idThematique` int(11) NOT NULL,
  PRIMARY KEY (`idCircuit`,`idThematique`),
  KEY `fk_Circuit_Promotion1_idx` (`idPromotion`),
  KEY `fk_Circuit_Thematique1_idx` (`idThematique`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `etape`
--

CREATE TABLE IF NOT EXISTS `etape` (
  `idEtape` int(11) NOT NULL AUTO_INCREMENT,
  `nomEtape` varchar(256) DEFAULT NULL,
  `duree` int(11) DEFAULT NULL,
  `repas` varchar(45) DEFAULT NULL,
  `idCircuit` int(11) NOT NULL,
  PRIMARY KEY (`idEtape`,`idCircuit`),
  KEY `fk_Etape_Circuit1_idx` (`idCircuit`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `hotels`
--

CREATE TABLE IF NOT EXISTS `hotels` (
  `idHotels` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(256) DEFAULT NULL,
  `urlHotel` varchar(256) DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`idHotels`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `jour`
--

CREATE TABLE IF NOT EXISTS `jour` (
  `idJour` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(256) DEFAULT NULL,
  `nomhotel` varchar(256) DEFAULT NULL,
  `idEtape` int(11) NOT NULL,
  `dejeuner` varchar(100) NOT NULL,
  `diner` varchar(100) NOT NULL,
  `souper` varchar(100) NOT NULL,
  `idRestaurant` int(11) NOT NULL,
  `idHotels` int(11) NOT NULL,
  PRIMARY KEY (`idJour`,`idEtape`,`dejeuner`,`diner`,`souper`),
  KEY `fk_Jour_Etape1_idx` (`idEtape`),
  KEY `fk_Jour_Restaurant1_idx` (`idRestaurant`),
  KEY `fk_Jour_Hotels1_idx` (`idHotels`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `paiement`
--

CREATE TABLE IF NOT EXISTS `paiement` (
  `idPaiement` int(11) NOT NULL AUTO_INCREMENT,
  `datePaiment` timestamp(6) NULL DEFAULT NULL,
  `montanttPaiment` float DEFAULT NULL,
  `idReservation` int(11) NOT NULL,
  PRIMARY KEY (`idPaiement`),
  KEY `fk_Paiement_Reservation1_idx` (`idReservation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `panier`
--

CREATE TABLE IF NOT EXISTS `panier` (
  `idPanier` int(11) NOT NULL AUTO_INCREMENT,
  `idUtilisateur` int(11) NOT NULL,
  `idCircuit` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPanier`),
  KEY `fk_Panier_Utilisateur1_idx` (`idUtilisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `participants`
--

CREATE TABLE IF NOT EXISTS `participants` (
  `idparticipants` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) DEFAULT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `courriel` varchar(256) DEFAULT NULL,
  `sexe` varchar(45) DEFAULT NULL,
  `tel` varchar(100) DEFAULT NULL,
  `idAdresse` int(11) NOT NULL,
  `idPasspor` int(11) NOT NULL,
  PRIMARY KEY (`idparticipants`),
  KEY `fk_participants_Adresse1_idx` (`idAdresse`),
  KEY `fk_participants_Passeport1_idx` (`idPasspor`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Contenu de la table `participants`
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

CREATE TABLE IF NOT EXISTS `passeport` (
  `idPasspor` int(11) NOT NULL AUTO_INCREMENT,
  `numeroPass` int(50) NOT NULL,
  `dateDelivPass` date NOT NULL,
  `dateExpiration` date NOT NULL,
  `nationalites` varchar(100) DEFAULT NULL,
  `lieuDeliv` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`idPasspor`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Contenu de la table `passeport`
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

CREATE TABLE IF NOT EXISTS `promotion` (
  `idPromotion` int(11) NOT NULL AUTO_INCREMENT,
  `taux` float DEFAULT NULL,
  `datedebut` timestamp(6) NULL DEFAULT NULL,
  `datefin` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`idPromotion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE IF NOT EXISTS `reservation` (
  `idReservation` int(11) NOT NULL AUTO_INCREMENT,
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
  `solde` float DEFAULT NULL,
  PRIMARY KEY (`idReservation`,`idUtilisateur`,`idCircuit`),
  KEY `fk_Reservation_Utilisateur_idx` (`idUtilisateur`),
  KEY `fk_Reservation_Circuit1_idx` (`idCircuit`),
  KEY `fk_Reservation_Panier1_idx` (`idPanier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `reservationparticipant`
--

CREATE TABLE IF NOT EXISTS `reservationparticipant` (
  `idParticipants` int(11) NOT NULL,
  `idReservation` int(11) NOT NULL,
  PRIMARY KEY (`idReservation`,`idParticipants`),
  KEY `fk_ReservationParticipant_participants1_idx` (`idParticipants`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `restaurant`
--

CREATE TABLE IF NOT EXISTS `restaurant` (
  `idRestaurant` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(256) DEFAULT NULL,
  `url` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`idRestaurant`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `thematique`
--

CREATE TABLE IF NOT EXISTS `thematique` (
  `idThematique` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`idThematique`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE IF NOT EXISTS `utilisateur` (
  `idUtilisateur` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) DEFAULT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `motDePasse` varchar(256) DEFAULT NULL,
  `courriel` varchar(64) DEFAULT NULL,
  `actif` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`idUtilisateur`),
  UNIQUE KEY `CourrielUtilisateur_UNIQUE` (`courriel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
