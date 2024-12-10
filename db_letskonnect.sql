-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2024 at 05:09 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

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
(2, 2, 'Mark Jorelle', 'Delloro', 'Pelayo', 'NA', 19, '2005-11-09', 'Male'),
(3, 4, 'Jon', 'Stewart', 'Doe', 'Jr.', 20, '2004-07-07', 'Male'),
(4, 5, 'Jon', 'Stewart', 'Doe', 'Jr.', 20, '2004-06-17', 'Male');

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
(2, 2, 'AWDAWDA WDAWD AWDWAD', 'Sitio 1', 'markjorelledpelayo@gmail.com', 98298342348),
(3, 4, '1600 Fake Street\nApartment 1', 'Sitio 1', 'test@example.us', 6019521325),
(4, 5, 'ADAWDAWD AWDAWDAWDAWD AW', 'Sitio 1', 'tehing@gmail.com', 4636456453456);

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
(2, 2, 'Single', 'Child Youth (15-17 yrs old)', 'College Graduate', 'In School Youth', 'Unemployed', 'Yes', 'Yes'),
(3, 4, 'Single', 'Child Youth (15-17 yrs old)', 'College Graduate', 'In School Youth', 'Unemployed', 'Yes', 'Yes'),
(4, 5, 'Single', 'Child Youth (15-17 yrs old)', 'College Graduate', 'In School Youth', 'Unemployed', 'Yes', 'Yes');

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
(2, 2, 'Yes', 1, 'Yes', 'Yes', '5', 'Yes', 'Yes'),
(3, 4, 'Yes', 2, 'Yes', 'Yes', '5', 'Yes', 'Yes'),
(4, 5, 'Yes', 2, 'Yes', 'Yes', '2', 'Yes', 'Yes');

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
(2, 2, 'No', '', ''),
(3, 4, 'No', '', ''),
(4, 5, 'No', '', '');

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
(2, 2, 'Senior Highschool Graduate', 'METRO MANILA COLLEGE', 'Yes', 'No', ''),
(3, 4, 'Highschool Graduate', 'SBHSEGH', 'No', 'No', ''),
(4, 5, 'Highschool Graduate', 'SBHSEGH', 'No', 'No', '');

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
(2, 2, 'image-1733740715310.png', 'uploads\\image-1733740715310.png', 'Mark Jorelle Pelayo'),
(4, 4, 'image-1733792459728.png', 'uploads\\image-1733792459728.png', 'Sora Kimino Yawa'),
(5, 5, 'image-1733797544389.png', 'uploads\\image-1733797544389.png', 'Ellyn Joyce Tehing');

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

--
-- Dumping data for table `tbl_eventposts`
--

INSERT INTO `tbl_eventposts` (`eventposts_ID`, `kk_adminID`, `date`, `time`, `location`, `requirements`, `employer`, `description`, `full_details`) VALUES
(2, 0, '2024-12-05', '06:50:00', 'ADAWDADAWDAWd', 'awdAWDAWDAWDAWD', 'AWDAWDAWDAWDAWDAWD', 'DAWDAWDAWDAWDAWD', 'DAWDAWDAWDAWDAWDAWDAWDADW');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_eventsposts1`
--

CREATE TABLE `tbl_eventsposts1` (
  `eventPost_ID` int(11) NOT NULL,
  `kk_adminID` int(11) DEFAULT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `requirements` text NOT NULL,
  `sponsor` text NOT NULL,
  `description` mediumtext NOT NULL,
  `fulldetails` longtext NOT NULL,
  `imgName` text NOT NULL,
  `imgPath` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_eventsposts1`
--

INSERT INTO `tbl_eventsposts1` (`eventPost_ID`, `kk_adminID`, `date`, `time`, `requirements`, `sponsor`, `description`, `fulldetails`, `imgName`, `imgPath`) VALUES
(1, NULL, '2024-12-14', '10:08:00', 'DAWHDIUAWHDIAUWHDAWOLDHALWDHAWDHD LHAWD HWAD LAWD HLD', 'LDIAWLDAHWDUAHDIUAWHDAWLI UHD ULWAHD ULWAHD IULH', 'IDHAWLID HAWLIDH AWLIDH AWILDH DLH', 'LDHAWLD HAWLD HAWLD HAWHD ALWHD h', 'image-1733796481480.png', '/uploads/image-1733796481480.png'),
(2, NULL, '2024-12-19', '00:09:00', 'ADJAIDH AIUDH AIUDH AWIULD ', 'AIDHA ILWDHAWIL AWLDHAW DLHAW Dlh', 'LDIAW DHAWLD HAWDL HAWD UILAW AHWDUH', 'AWLWDH AWIUDH AWLIUD AWLD HAWULD HAIWLHD AWLH D', 'image-1733846924919.webp', '/uploads/image-1733846924919.webp');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_kkadmin`
--

CREATE TABLE `tbl_kkadmin` (
  `kk_adminID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `emailAddress` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_kkadmin`
--

INSERT INTO `tbl_kkadmin` (`kk_adminID`, `name`, `userName`, `emailAddress`, `password`) VALUES
(1, 'Mark Jorelle Pelayo', 'Mark Jorelle', 'markjorelledpelayo@gmail.com', 'admin123456'),
(3, 'Rain Alexander Aguirre', 'Rain', 'rainalexander@gmail.com', 'Rain123456789');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_registrants`
--

CREATE TABLE `tbl_registrants` (
  `reg_ID` int(11) NOT NULL,
  `post_ID` int(11) DEFAULT NULL,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` bigint(20) NOT NULL,
  `address` text NOT NULL,
  `dateOfReg` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_registrants`
--

INSERT INTO `tbl_registrants` (`reg_ID`, `post_ID`, `fullName`, `email`, `contact`, `address`, `dateOfReg`) VALUES
(1, 1, 'markmark', 'markjorelledpelayo@gmail.com', 82034820, 'awifhwifhef', '2024-12-11'),
(2, 1, 'markmark', 'markjorelledpelayo@gmail.com', 68568568, 'awifhwifhef', '2024-12-11');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_survey`
--

CREATE TABLE `tbl_survey` (
  `surveyID` int(11) NOT NULL,
  `question1` varchar(50) NOT NULL,
  `question2` varchar(50) NOT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_survey`
--

INSERT INTO `tbl_survey` (`surveyID`, `question1`, `question2`, `category`) VALUES
(1, 'Yes', 'Yes', 'For High School Graduate'),
(2, 'Yes', 'No', 'For Undergraduate');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_surveyres`
--

CREATE TABLE `tbl_surveyres` (
  `tbl_surveylist` int(11) NOT NULL,
  `surveyID` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `category` varchar(250) NOT NULL,
  `ques1` bigint(20) NOT NULL,
  `ques2` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_usersacc`
--

CREATE TABLE `tbl_usersacc` (
  `userAcc_ID` int(11) NOT NULL,
  `emailAddress` varchar(150) NOT NULL,
  `password` varchar(20) NOT NULL,
  `age` int(11) NOT NULL,
  `dateOfReg` date NOT NULL,
  `reset_code` varchar(6) DEFAULT NULL,
  `reset_code_expiration` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_usersacc`
--

INSERT INTO `tbl_usersacc` (`userAcc_ID`, `emailAddress`, `password`, `age`, `dateOfReg`, `reset_code`, `reset_code_expiration`) VALUES
(2, 'markjorelledpelayo@gmail.com', 'DelloroDelloro24', 20, '2024-12-09', '131947', '2024-12-09 18:40:38'),
(4, 'test@example.us', '12345678Etyuiop', 20, '2024-12-10', NULL, NULL),
(5, 'tehing@gmail.com', 'Tehing2024', 20, '2024-12-10', NULL, NULL);

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
-- Indexes for table `tbl_eventsposts1`
--
ALTER TABLE `tbl_eventsposts1`
  ADD PRIMARY KEY (`eventPost_ID`),
  ADD KEY `kk_adminID` (`kk_adminID`);

--
-- Indexes for table `tbl_kkadmin`
--
ALTER TABLE `tbl_kkadmin`
  ADD PRIMARY KEY (`kk_adminID`);

--
-- Indexes for table `tbl_registrants`
--
ALTER TABLE `tbl_registrants`
  ADD PRIMARY KEY (`reg_ID`),
  ADD KEY `post_ID` (`post_ID`);

--
-- Indexes for table `tbl_survey`
--
ALTER TABLE `tbl_survey`
  ADD PRIMARY KEY (`surveyID`);

--
-- Indexes for table `tbl_surveyres`
--
ALTER TABLE `tbl_surveyres`
  ADD PRIMARY KEY (`tbl_surveylist`),
  ADD UNIQUE KEY `surveyID` (`surveyID`);

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
  MODIFY `kk_personalInfo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `kk_personalinfo2`
--
ALTER TABLE `kk_personalinfo2`
  MODIFY `kk_personalInfo2` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `kk_personalinfo3`
--
ALTER TABLE `kk_personalinfo3`
  MODIFY `kk_personaInfo3` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `kk_personalinfo4`
--
ALTER TABLE `kk_personalinfo4`
  MODIFY `kk_personaInfo4` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  MODIFY `kk_personaInfo7` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_eventposts`
--
ALTER TABLE `tbl_eventposts`
  MODIFY `eventposts_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_eventsposts1`
--
ALTER TABLE `tbl_eventsposts1`
  MODIFY `eventPost_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_kkadmin`
--
ALTER TABLE `tbl_kkadmin`
  MODIFY `kk_adminID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_registrants`
--
ALTER TABLE `tbl_registrants`
  MODIFY `reg_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_survey`
--
ALTER TABLE `tbl_survey`
  MODIFY `surveyID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_surveyres`
--
ALTER TABLE `tbl_surveyres`
  MODIFY `tbl_surveylist` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_usersacc`
--
ALTER TABLE `tbl_usersacc`
  MODIFY `userAcc_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
-- Constraints for table `tbl_surveyres`
--
ALTER TABLE `tbl_surveyres`
  ADD CONSTRAINT `tbl_surveyres_ibfk_1` FOREIGN KEY (`tbl_surveylist`) REFERENCES `tbl_survey` (`surveyID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
