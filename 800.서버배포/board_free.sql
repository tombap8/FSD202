-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 21-03-31 09:01
-- 서버 버전: 10.4.17-MariaDB
-- PHP 버전: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `mydb`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `board_free`
--

CREATE TABLE `board_free` (
  `uno` int(10) UNSIGNED NOT NULL,
  `gno` int(10) UNSIGNED NOT NULL,
  `reply_depth` varchar(255) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `passwd` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `homepage` varchar(50) DEFAULT NULL,
  `subject` varchar(60) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `html_tag` varchar(10) DEFAULT NULL,
  `hit` int(5) UNSIGNED NOT NULL,
  `register_date` int(10) UNSIGNED DEFAULT NULL,
  `client_ip` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `board_free`
--

INSERT INTO `board_free` (`uno`, `gno`, `reply_depth`, `name`, `passwd`, `email`, `homepage`, `subject`, `content`, `html_tag`, `hit`, `register_date`, `client_ip`) VALUES
(1, 1, '1', '김수로', '$2y$10$1iYPqn9LTdjTWNIHrElGreL3Ngf.mhaT/9ckkckDkEqSgN9JOkIqe', 'kim@naver.com', '', '나의 첫글', '여기서부터 내글', '', 0, 1616654439, '192.105.222.147'),
(2, 1, '1', '탐쌤', '$2y$10$1iYPqn9LTdjTWNIHrElGreL3Ngf.mhaT/9ckkckDkEqSgN9JOkIqe', '', '', '여기 첫글222', '여기가 글내용222', '', 0, 1616654439, '127.0.0.1'),
(3, 1, '1', '탐쌤', '$2y$10$1iYPqn9LTdjTWNIHrElGreL3Ngf.mhaT/9ckkckDkEqSgN9JOkIqe', '', '', '셋째글', '여기여', '', 1, 1616654439, '127.0.0.1'),
(4, 1, '1', '김쌤', '$2y$10$1iYPqn9LTdjTWNIHrElGreL3Ngf.mhaT/9ckkckDkEqSgN9JOkIqe', '', '', '하하하 여기야', '이렇게 하는고야\r\n김김김', '', 0, 1616654439, '127.0.0.1'),
(5, 1, '1', '김수로', '$2y$10$1iYPqn9LTdjTWNIHrElGreL3Ngf.mhaT/9ckkckDkEqSgN9JOkIqe', '', '', '나는 김수로다!', '하하하하하하하', '', 0, 1616654439, '::1'),
(6, 1, '1', '조영구', '$2y$10$1iYPqn9LTdjTWNIHrElGreL3Ngf.mhaT/9ckkckDkEqSgN9JOkIqe', 'yong@naver.com', 'http://www.naver.com', '나는야 개발자', '여기서 중요한 것은 코딩이다!', '', 0, 1616655513, '::1'),
(7, 1, '1', '김혜수', '$2y$10$bqhSRTpcEd/ZJmGsOSgX../LdaiYMJ1x0h2iAuKKHkl87AJV0p2SW', 'kim@naver.com', '', '나는 여배우다!', '여배우란 자고로....\r\n이렇게 해야한다!', '', 0, 1616737127, '::1'),
(8, 1, '1', '성춘향', '$2y$10$LTGgk5E/2OxV8Dcl0Torle09xkD7ioj47nLK4vyxaZKXK21W/M5uy', '', '', '이도령은 어디있나?', '이도령은 정말로 어디있나?', 'on', 0, 1616737995, '::1'),
(11, 1, '1', '김수로', '$2y$10$9LCI/xIn5SxxOuytLa/I8eF.CZpiSKm3ZQJmkmQcWUDSqO8KMr5/e', '', '', '또 한번!!!', '<h1 style=\"color:red\">하하하</h1>\r\n<p>너는 누구냐?</p>', 'on', 0, 1616742459, '::1'),
(12, 1, '1', '김평평', '$2y$10$HcIwsq.e.MquEHwEMWzTZO/OPF3AsBWtDyrX7Y6u.zbraDBnqQ7MO', 'happyvirus7777@daum.net', 'www.naver.com', '나는 바다가 좋아~!', '<h2 style=\"color:blue\">여기가 어디지?</h2>\r\n여기는 학원 아니지!!!<br>\r\n<a href=\"#\">훈련중이야!</a>', 'on', 0, 1617158287, '::1'),
(13, 1, '1', '김평평', '$2y$10$b2UP2LUV/3GXRlKT.tne6eJN5Wo6O9t1qTv9keXaOQxR7A.Zs11c6', '', '', '이사했다!', '이사했으니 이제 좀 쉬자!\r\n하하하하하핳하', '', 0, 1617170063, '::1');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `board_free`
--
ALTER TABLE `board_free`
  ADD PRIMARY KEY (`uno`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `board_free`
--
ALTER TABLE `board_free`
  MODIFY `uno` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
