-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Nov 29, 2024 at 03:22 PM
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
-- Database: `db_letskonek`
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
(1, 15, 'Jon', 'Stewart', 'Doe', 'awdawdawd', 20, '2004-03-29', 'Male');

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
(1, 15, '1600 Fake Street\nApartment 1', 'Sitio-1', 'test@example.us', 6019521325);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_evtposts`
--

CREATE TABLE `tbl_evtposts` (
  `evtPost_ID` int(11) NOT NULL,
  `evt_Title` varchar(255) NOT NULL,
  `evt_Text` text NOT NULL,
  `dateOfPost` date NOT NULL,
  `pubMat` blob NOT NULL
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
  `dateOfReg` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_usersacc`
--

INSERT INTO `tbl_usersacc` (`userAcc_ID`, `emailAddress`, `password`, `age`, `dateOfReg`) VALUES
(14, 'awdawd@gmail.com', 'skibidirizz', 16, '2005-04-15'),
(15, 'test@example.us', 'test1234567', 18, '0000-00-00');

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
-- Indexes for table `tbl_evtposts`
--
ALTER TABLE `tbl_evtposts`
  ADD PRIMARY KEY (`evtPost_ID`);

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
  MODIFY `kk_personalInfo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `kk_personalinfo2`
--
ALTER TABLE `kk_personalinfo2`
  MODIFY `kk_personalInfo2` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_evtposts`
--
ALTER TABLE `tbl_evtposts`
  MODIFY `evtPost_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_usersacc`
--
ALTER TABLE `tbl_usersacc`
  MODIFY `userAcc_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
