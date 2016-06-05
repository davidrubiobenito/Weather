-- --------------------------------------------------------
-- Host:                         192.168.1.25
-- Versión del servidor:         5.5.49-0ubuntu0.14.04.1 - (Ubuntu)
-- SO del servidor:              debian-linux-gnu
-- HeidiSQL Versión:             9.3.0.5086
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para weather
CREATE DATABASE IF NOT EXISTS `weather` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `weather`;

-- Volcando estructura para tabla weather.cities
CREATE TABLE IF NOT EXISTS `cities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
-- Volcando estructura para tabla weather.forecast
CREATE TABLE IF NOT EXISTS `forecast` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `forecast` varchar(100) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `id_city` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `forecast_id_city__cities_id` (`id_city`),
  CONSTRAINT `forecast_id_city__cities_id` FOREIGN KEY (`id_city`) REFERENCES `cities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
