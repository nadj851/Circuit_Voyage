-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 22 Mars 2018 à 19:42
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

-- --------------------------------------------------------

--
-- Structure de la table `adresse`
--
CREATE DATABASE IF NOT EXISTS `munarela` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `munarela`;


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
  `titre` varchar(45) NOT NULL,
  `dateDeDepart` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `dateDeRetour` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000',
  `nbPersonnesMax` int(2) DEFAULT NULL,
  `nbPersonnesMin` int(2) DEFAULT NULL,
  `description` varchar(256) NOT NULL,
  `prix` float NOT NULL,
  `imageCircuit` varchar(256) NOT NULL,
  `guide` varchar(256) DEFAULT NULL,
  `idPromotion` int(11) DEFAULT NULL,
  `idThematique` int(11) NOT NULL,
  PRIMARY KEY (`idCircuit`,`idThematique`),
  KEY `fk_Circuit_Promotion1_idx` (`idPromotion`),
  KEY `fk_Circuit_Thematique1_idx` (`idThematique`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=34 ;

--
-- Contenu de la table `circuit`
--

INSERT INTO `circuit` (`idCircuit`, `titre`, `dateDeDepart`, `dateDeRetour`, `nbPersonnesMax`, `nbPersonnesMin`, `description`, `prix`, `imageCircuit`, `guide`, `idPromotion`, `idThematique`) VALUES
(31, 'mal', '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', NULL, NULL, '', 0, 'f1d299bec6543f6807864b5a5740214b525b6a62', NULL, NULL, 11),
(32, 'ssss', '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', NULL, NULL, '', 0, '3d66d765c45e5e6f32813eefb317f2903ccf1f01', NULL, NULL, 11),
(33, 'alo', '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', NULL, NULL, '', 0, '523bcf58b642ab843073d90b8f7bc8b05377852d', NULL, NULL, 11);

-- --------------------------------------------------------

--
-- Structure de la table `etape`
--

CREATE TABLE IF NOT EXISTS `etape` (
  `idEtape` int(11) NOT NULL AUTO_INCREMENT,
  `nomEtape` varchar(256) NOT NULL,
  `descriptionEtape` varchar(256) NOT NULL,
  `idCircuit` int(11) NOT NULL,
  PRIMARY KEY (`idEtape`,`idCircuit`),
  KEY `fk_Etape_Circuit1_idx` (`idCircuit`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=22 ;

--
-- Contenu de la table `etape`
--

INSERT INTO `etape` (`idEtape`, `nomEtape`, `descriptionEtape`, `idCircuit`) VALUES
(19, 'pal', '', 31),
(20, 'sssss', '', 32),
(21, 'aloetape', '', 33);

-- --------------------------------------------------------

--
-- Structure de la table `jour`
--

CREATE TABLE IF NOT EXISTS `jour` (
  `idJour` int(11) NOT NULL AUTO_INCREMENT,
  `nomhotel` varchar(256) DEFAULT NULL,
  `urlHotel` varchar(100) DEFAULT NULL,
  `nomRestaurant` varchar(100) DEFAULT NULL,
  `urlRestaurant` varchar(100) DEFAULT NULL,
  `dejeuner` tinyint(1) NOT NULL DEFAULT '0',
  `diner` tinyint(1) NOT NULL DEFAULT '0',
  `souper` tinyint(1) NOT NULL DEFAULT '0',
  `description` varchar(256) DEFAULT NULL,
  `idEtape` int(11) NOT NULL,
  PRIMARY KEY (`idJour`,`idEtape`,`dejeuner`,`diner`,`souper`),
  KEY `fk_Jour_Etape1_idx` (`idEtape`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Contenu de la table `jour`
--

INSERT INTO `jour` (`idJour`, `nomhotel`, `urlHotel`, `nomRestaurant`, `urlRestaurant`, `dejeuner`, `diner`, `souper`, `description`, `idEtape`) VALUES
(3, 'sssss', '', '', NULL, 0, 0, 0, 'ss', 20),
(4, 'sssss', '', '', NULL, 1, 0, 0, 'ss', 20),
(5, 'sssss', '', '', NULL, 1, 1, 0, 'ss', 20),
(6, 'aaa', '', '', '', 0, 0, 0, '', 21),
(7, 'aaa', '', '', '', 0, 0, 0, 'aaaaaa', 21),
(8, 'aaa', 'xxxUH', 'xR', 'xUR', 1, 0, 0, 'des', 21);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Contenu de la table `participants`
--

INSERT INTO `participants` (`idparticipants`, `nom`, `prenom`, `courriel`, `sexe`, `tel`, `idAdresse`, `idPasspor`) VALUES
(1, 'alo', 'malo', 'a@g.com', 'Homme', NULL, 1, 1),
(2, 'mal', 'al', 'a@gmail.com', 'Homme', '133456789', 17, 2),
(3, 'mal', 'al', 'a@gmail.com', 'Homme', '133456789', 18, 3),
(5, 'larkem', 'nadjib', 'a@gmail.com', 'Homme', '123456', 20, 5);

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
-- Structure de la table `thematique`
--

CREATE TABLE IF NOT EXISTS `thematique` (
  `idThematique` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`idThematique`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=18 ;

--
-- Contenu de la table `thematique`
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

CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `display_name` varchar(50) NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `CourrielUtilisateur_UNIQUE` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- Contenu de la table `utilisateur`
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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
