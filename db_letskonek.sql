-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Nov 25, 2024 at 01:58 PM
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
-- Table structure for table `tbl_kk_info`
--

CREATE TABLE `tbl_kk_info` (
  `KK_Info_ID` int(4) NOT NULL,
  `userAcc_ID` int(4) NOT NULL,
  `fName` varchar(255) NOT NULL,
  `lName` varchar(255) NOT NULL,
  `mName` varchar(255) NOT NULL,
  `suffix` varchar(255) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `age` int(2) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `emailAddress` varchar(255) NOT NULL,
  `contactNo` bigint(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_kk_info`
--

INSERT INTO `tbl_kk_info` (`KK_Info_ID`, `userAcc_ID`, `fName`, `lName`, `mName`, `suffix`, `sex`, `age`, `dateOfBirth`, `emailAddress`, `contactNo`) VALUES
(1, 14, 'Skibidi', 'Rizz', 'Mahol', '', '', 16, '0000-00-00', 'awdawd@gmail.com', 0);

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
-- Indexes for table `tbl_evtposts`
--
ALTER TABLE `tbl_evtposts`
  ADD PRIMARY KEY (`evtPost_ID`);

--
-- Indexes for table `tbl_kk_info`
--
ALTER TABLE `tbl_kk_info`
  ADD PRIMARY KEY (`KK_Info_ID`),
  ADD KEY `userAcc_ID` (`userAcc_ID`),
  ADD KEY `fName` (`fName`);

--
-- Indexes for table `tbl_usersacc`
--
ALTER TABLE `tbl_usersacc`
  ADD PRIMARY KEY (`userAcc_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_evtposts`
--
ALTER TABLE `tbl_evtposts`
  MODIFY `evtPost_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_kk_info`
--
ALTER TABLE `tbl_kk_info`
  MODIFY `KK_Info_ID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_usersacc`
--
ALTER TABLE `tbl_usersacc`
  MODIFY `userAcc_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_kk_info`
--
ALTER TABLE `tbl_kk_info`
  ADD CONSTRAINT `tbl_kk_info_ibfk_1` FOREIGN KEY (`userAcc_ID`) REFERENCES `tbl_usersacc` (`userAcc_ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
