-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: la_traviata
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu0.17.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `story`
--

DROP TABLE IF EXISTS `story`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `story` (
  `text` varchar(1000) COLLATE utf8_bin NOT NULL,
  `options` varchar(1000) COLLATE utf8_bin NOT NULL,
  `gives` varchar(100) COLLATE utf8_bin NOT NULL DEFAULT '',
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `story`
--

LOCK TABLES `story` WRITE;
/*!40000 ALTER TABLE `story` DISABLE KEYS */;
INSERT INTO `story` VALUES ('\"#name and Alfredo talk about their love. Alfredo confesses he loves her a lot.  Later, at the party - Alfredo prosposes a toast and talks about his love about #name. Even later, #name and Alfredo talk in private.\"','[\"4 Accept him\",\"5 Reject him\"]','',20,1),('\"#name is standing on a balcony... Alfredo is coming to talk to her.\"','[\"1 Talk to him\",\"2 Ignore him\"]','',21,0),('\"Later that evening, Alfredo proposes a toast in front of the party guests. He talks about his love for #name.\"','[\"4 Accept him\",\"6 Reject him\"]','',22,2),('\"Alfredo leaves and commits suicide. #name is devastated and dies from stress. The other day #name wakes up in the house. Alfredo\'s father pays a visit - he cries to her about his son, but doesn\'t blame her. #name is devastated and dies of depression... Game Over.\"','[\"0 Replay\"]','',23,6),('\"Alfredo leaves. #name wakes up in the house. Doctor Grenvil pays a visit. He gives #name a bottle of pills that will help with the sickness. Next day, Alfredo comes back and confesses his love once again. #name starts hurting...\"','[\"10 Fall in his arms\",\"11 Use pills\",\"99 Do nothing\"]','',24,5),('\"You died. Game Over.\"','[\"0 Try again\"]','',25,99),('\"#name and Alfredo wake up in the house. #name leaves for a short moment. While #name is out, Doctor Grenvil pays Alfredo a visit but doesn\'t give him the pills #name needs because of his jealousy. Later that night, #name collapses and dies.\"','[\"0 Game Over. Try again.\"]','',26,4),('\"#name falls in his arms and dies.\"','[\"0 Game Over. Try again.\"]','',27,10),('\"#name takes a pill from the pill bottle. #name feels immediately better and they live a happy life ever after.\"','[\"0 Game Over. Try again.\"]','',28,11);
/*!40000 ALTER TABLE `story` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `username` varchar(20) COLLATE utf8_bin NOT NULL,
  `password` varchar(64) COLLATE utf8_bin NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `on_question` int(11) DEFAULT '0',
  `at_location` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-28  9:11:15
