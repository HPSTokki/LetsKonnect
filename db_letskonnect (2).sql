-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Dec 01, 2024 at 03:22 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_letskonnect`
--

-- --------------------------------------------------------

--
-- Table structure for table `kk_personalinfo`
--

CREATE TABLE `kk_personalinfo` (
  `kk_personalInfo` int(11) NOT NULL,
  `userAcc_ID` int(11) NOT NULL,
  `givenName` varchar(150) NOT NULL,
  `middleName` varchar(150) NOT NULL,
  `lastName` varchar(150) NOT NULL,
  `suffix` varchar(50) NOT NULL,
  `age` int(11) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `sex` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kk_personalinfo`
--

INSERT INTO `kk_personalinfo` (`kk_personalInfo`, `userAcc_ID`, `givenName`, `middleName`, `lastName`, `suffix`, `age`, `dateOfBirth`, `sex`) VALUES
(1, 15, 'DAWDAWDADADAWD', 'DADADADAWD', 'AWDADADAWd', 'ADAWDAWDAD', 20, '2004-07-23', 'Female'),
(2, 16, 'Renace', 'Raymundo', 'Tehing', 'N/A', 20, '2004-08-19', 'Female');

-- --------------------------------------------------------

--
-- Table structure for table `kk_personalinfo2`
--

CREATE TABLE `kk_personalinfo2` (
  `kk_personalInfo2` int(11) NOT NULL,
  `userAcc_ID` int(11) NOT NULL,
  `blk_street` text NOT NULL,
  `sitio` varchar(50) NOT NULL,
  `emailAddress` varchar(150) NOT NULL,
  `contacts` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kk_personalinfo2`
--

INSERT INTO `kk_personalinfo2` (`kk_personalInfo2`, `userAcc_ID`, `blk_street`, `sitio`, `emailAddress`, `contacts`) VALUES
(1, 15, 'AUDAWIDHAIDJHAIODHDUIAHDI', 'Sitio-1', 'jawdUIAdh@gmail.com', 3570275020),
(2, 16, 'ADAWDADAWD', 'Sitio 2', 'ADAWDADWD@gmail.com', 20349023840);

-- --------------------------------------------------------

--
-- Table structure for table `kk_personalinfo3`
--

CREATE TABLE `kk_personalinfo3` (
  `kk_personaInfo3` int(11) NOT NULL,
  `userAcc_ID` int(11) NOT NULL,
  `civilStatus` varchar(150) NOT NULL,
  `youthAge` varchar(150) NOT NULL,
  `educationalBackground` varchar(150) NOT NULL,
  `youthClass` varchar(150) NOT NULL,
  `workStatus` varchar(150) NOT NULL,
  `regVoter` varchar(20) NOT NULL,
  `regNatVoter` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kk_personalinfo3`
--

INSERT INTO `kk_personalinfo3` (`kk_personaInfo3`, `userAcc_ID`, `civilStatus`, `youthAge`, `educationalBackground`, `youthClass`, `workStatus`, `regVoter`, `regNatVoter`) VALUES
(1, 15, 'Single', 'child', 'Senior Highschool Graduate', 'inSchool', 'Employed', 'yes', 'yes'),
(2, 16, 'Single', 'Core Youth (18-24 yrs old)', 'Senior Highschool Graduate', 'In School Youth', 'Unemployed', 'No', 'No');

-- --------------------------------------------------------

--
-- Table structure for table `kk_personalinfo4`
--

CREATE TABLE `kk_personalinfo4` (
  `kk_personaInfo4` int(11) NOT NULL,
  `userAcc_ID` int(11) NOT NULL,
  `soloParent` varchar(20) NOT NULL,
  `kid_count` int(11) NOT NULL,
  `isLGBT` varchar(20) NOT NULL,
  `attendedKK` varchar(20) NOT NULL,
  `attendedTime` varchar(20) NOT NULL,
  `personWDisability` varchar(20) NOT NULL,
  `partIndigenous` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kk_personalinfo4`
--

INSERT INTO `kk_personalinfo4` (`kk_personaInfo4`, `userAcc_ID`, `soloParent`, `kid_count`, `isLGBT`, `attendedKK`, `attendedTime`, `personWDisability`, `partIndigenous`) VALUES
(1, 15, 'yes', 2, 'yes', 'yes', '2', 'Yes', 'yes'),
(2, 16, 'No', 0, 'No', 'No', '0', 'No', 'No');

-- --------------------------------------------------------

--
-- Table structure for table `kk_personalinfo5`
--

CREATE TABLE `kk_personalinfo5` (
  `kk_personaInfo5` int(11) NOT NULL,
  `userAcc_ID` int(11) NOT NULL,
  `licensedProd` varchar(150) NOT NULL,
  `company` varchar(255) NOT NULL,
  `position` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kk_personalinfo5`
--

INSERT INTO `kk_personalinfo5` (`kk_personaInfo5`, `userAcc_ID`, `licensedProd`, `company`, `position`) VALUES
(1, 15, 'YES', 'none', 'IDJAOWJDIAWJD'),
(4, 16, 'No', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `kk_personalinfo6`
--

CREATE TABLE `kk_personalinfo6` (
  `kk_personaInfo6` int(11) NOT NULL,
  `userAcc_ID` int(11) NOT NULL,
  `lvl` varchar(255) NOT NULL,
  `school` varchar(255) NOT NULL,
  `ydo_recipient` varchar(10) NOT NULL,
  `other_recipient` varchar(10) NOT NULL,
  `other_detes` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kk_personalinfo6`
--

INSERT INTO `kk_personalinfo6` (`kk_personaInfo6`, `userAcc_ID`, `lvl`, `school`, `ydo_recipient`, `other_recipient`, `other_detes`) VALUES
(1, 15, 'Highschool Graduate', 'ADAWDADAWD', 'Yes', 'Yes', 'AWDAWDAWDAWD'),
(3, 16, 'Senior Highschool Graduate', 'Quezon City University', 'No', 'No', '');

-- --------------------------------------------------------

--
-- Table structure for table `kk_personalinfo7`
--

CREATE TABLE `kk_personalinfo7` (
  `kk_personaInfo7` int(11) NOT NULL,
  `userAcc_ID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `complete_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kk_personalinfo7`
--

INSERT INTO `kk_personalinfo7` (`kk_personaInfo7`, `userAcc_ID`, `name`, `path`, `complete_name`) VALUES
(1, 16, 'image-1733015737160.ico', 'uploads\\image-1733015737160.ico', 'Renace Tehing');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_eventposts`
--

CREATE TABLE `tbl_eventposts` (
  `eventposts_ID` int(11) NOT NULL,
  `kk_adminID` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `location` text NOT NULL,
  `requirements` text NOT NULL,
  `employer` varchar(255) NOT NULL,
  `description` mediumtext NOT NULL,
  `full_details` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_kkadmin`
--

CREATE TABLE `tbl_kkadmin` (
  `kk_adminID` int(11) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `emailAddress` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_kkadmin`
--

INSERT INTO `tbl_kkadmin` (`kk_adminID`, `userName`, `emailAddress`, `password`) VALUES
(1, 'Mark Jorelle', 'markjorelledpelayo@gmail.com', 'admin123456');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_usersacc`
--

CREATE TABLE `tbl_usersacc` (
  `userAcc_ID` int(11) NOT NULL,
  `emailAddress` varchar(150) NOT NULL,
  `password` varchar(20) NOT NULL,
  `age` int(11) NOT NULL,
  `dateOfReg` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_usersacc`
--

INSERT INTO `tbl_usersacc` (`userAcc_ID`, `emailAddress`, `password`, `age`, `dateOfReg`) VALUES
(14, 'awdawd@gmail.com', 'skibidirizz', 16, '2005-04-15'),
(15, 'test@example.us', 'test1234567', 18, '0000-00-00'),
(16, 'renacetehing@gmail.com', 'renacetehing_16', 20, '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kk_personalinfo`
--
ALTER TABLE `kk_personalinfo`
  ADD PRIMARY KEY (`kk_personalInfo`),
  ADD UNIQUE KEY `userAcc_ID` (`userAcc_ID`);

--
-- Indexes for table `kk_personalinfo2`
--
ALTER TABLE `kk_personalinfo2`
  ADD PRIMARY KEY (`kk_personalInfo2`),
  ADD UNIQUE KEY `userAcc_ID` (`userAcc_ID`);

--
-- Indexes for table `kk_personalinfo3`
--
ALTER TABLE `kk_personalinfo3`
  ADD PRIMARY KEY (`kk_personaInfo3`),
  ADD UNIQUE KEY `userAcc_ID` (`userAcc_ID`);

--
-- Indexes for table `kk_personalinfo4`
--
ALTER TABLE `kk_personalinfo4`
  ADD PRIMARY KEY (`kk_personaInfo4`),
  ADD UNIQUE KEY `userAcc_ID` (`userAcc_ID`);

--
-- Indexes for table `kk_personalinfo5`
--
ALTER TABLE `kk_personalinfo5`
  ADD PRIMARY KEY (`kk_personaInfo5`),
  ADD UNIQUE KEY `userAcc_ID` (`userAcc_ID`);

--
-- Indexes for table `kk_personalinfo6`
--
ALTER TABLE `kk_personalinfo6`
  ADD PRIMARY KEY (`kk_personaInfo6`),
  ADD UNIQUE KEY `userAcc_ID` (`userAcc_ID`);

--
-- Indexes for table `kk_personalinfo7`
--
ALTER TABLE `kk_personalinfo7`
  ADD PRIMARY KEY (`kk_personaInfo7`),
  ADD UNIQUE KEY `userAcc_ID` (`userAcc_ID`);

--
-- Indexes for table `tbl_eventposts`
--
ALTER TABLE `tbl_eventposts`
  ADD PRIMARY KEY (`eventposts_ID`),
  ADD KEY `kk_adminID` (`kk_adminID`);

--
-- Indexes for table `tbl_kkadmin`
--
ALTER TABLE `tbl_kkadmin`
  ADD PRIMARY KEY (`kk_adminID`);

--
-- Indexes for table `tbl_usersacc`
--
ALTER TABLE `tbl_usersacc`
  ADD PRIMARY KEY (`userAcc_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kk_personalinfo`
--
ALTER TABLE `kk_personalinfo`
  MODIFY `kk_personalInfo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `kk_personalinfo2`
--
ALTER TABLE `kk_personalinfo2`
  MODIFY `kk_personalInfo2` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `kk_personalinfo3`
--
ALTER TABLE `kk_personalinfo3`
  MODIFY `kk_personaInfo3` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `kk_personalinfo4`
--
ALTER TABLE `kk_personalinfo4`
  MODIFY `kk_personaInfo4` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `kk_personalinfo5`
--
ALTER TABLE `kk_personalinfo5`
  MODIFY `kk_personaInfo5` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `kk_personalinfo6`
--
ALTER TABLE `kk_personalinfo6`
  MODIFY `kk_personaInfo6` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `kk_personalinfo7`
--
ALTER TABLE `kk_personalinfo7`
  MODIFY `kk_personaInfo7` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_eventposts`
--
ALTER TABLE `tbl_eventposts`
  MODIFY `eventposts_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_kkadmin`
--
ALTER TABLE `tbl_kkadmin`
  MODIFY `kk_adminID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_usersacc`
--
ALTER TABLE `tbl_usersacc`
  MODIFY `userAcc_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `kk_personalinfo`
--
ALTER TABLE `kk_personalinfo`
  ADD CONSTRAINT `kk_personalinfo_ibfk_1` FOREIGN KEY (`userAcc_ID`) REFERENCES `tbl_usersacc` (`userAcc_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `kk_personalinfo2`
--
ALTER TABLE `kk_personalinfo2`
  ADD CONSTRAINT `kk_personalinfo2_ibfk_1` FOREIGN KEY (`userAcc_ID`) REFERENCES `tbl_usersacc` (`userAcc_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `kk_personalinfo3`
--
ALTER TABLE `kk_personalinfo3`
  ADD CONSTRAINT `kk_personalinfo3_ibfk_1` FOREIGN KEY (`userAcc_ID`) REFERENCES `tbl_usersacc` (`userAcc_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `kk_personalinfo4`
--
ALTER TABLE `kk_personalinfo4`
  ADD CONSTRAINT `kk_personalinfo4_ibfk_1` FOREIGN KEY (`userAcc_ID`) REFERENCES `tbl_usersacc` (`userAcc_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `kk_personalinfo5`
--
ALTER TABLE `kk_personalinfo5`
  ADD CONSTRAINT `kk_personalinfo5_ibfk_1` FOREIGN KEY (`userAcc_ID`) REFERENCES `tbl_usersacc` (`userAcc_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `kk_personalinfo6`
--
ALTER TABLE `kk_personalinfo6`
  ADD CONSTRAINT `kk_personalinfo6_ibfk_1` FOREIGN KEY (`userAcc_ID`) REFERENCES `tbl_usersacc` (`userAcc_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `kk_personalinfo7`
--
ALTER TABLE `kk_personalinfo7`
  ADD CONSTRAINT `kk_personalinfo7_ibfk_1` FOREIGN KEY (`userAcc_ID`) REFERENCES `tbl_usersacc` (`userAcc_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_eventposts`
--
ALTER TABLE `tbl_eventposts`
  ADD CONSTRAINT `tbl_eventposts_ibfk_1` FOREIGN KEY (`kk_adminID`) REFERENCES `tbl_kkadmin` (`kk_adminID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
