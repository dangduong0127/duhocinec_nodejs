-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th2 28, 2025 lúc 05:27 PM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `duhocinec`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Categories`
--

CREATE TABLE `Categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `Categories`
--

INSERT INTO `Categories` (`id`, `name`, `path`, `position`) VALUES
(22, 'Châu Âu', '/chau-au', 0),
(23, 'Châu Mỹ', '/chau-my', 1),
(24, 'Châu Á', '/chau-a', 2),
(25, 'Châu Úc', '/chau-uc', 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Cities`
--

CREATE TABLE `Cities` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Comments`
--

CREATE TABLE `Comments` (
  `id` int(11) NOT NULL,
  `post_id` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Countries`
--

CREATE TABLE `Countries` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `excerpt` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `author` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `universities_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `Countries`
--

INSERT INTO `Countries` (`id`, `title`, `excerpt`, `thumbnail`, `content`, `slug`, `author`, `category_id`, `universities_id`, `createdAt`) VALUES
(1, 'Du học Áo', NULL, 'uploads/94984d720a500c065eb42b401.jpg', NULL, '/du-hoc-ao', 4, 22, NULL, '2025-02-22 04:45:02'),
(2, 'Du học Anh', 'Mô tả du học anh', 'uploads/94984d720a500c065eb42b403.jpg', NULL, '/du-hoc-anh', 4, 22, NULL, '2025-02-22 04:46:49'),
(3, 'Du học Bỉ', 'Mô tả ngắn du học Bỉ', 'uploads/94984d720a500c065eb42b400.jpg', 'Sinh viên nhận được \"gói giờ làm việc\" hàng năm từ chính phủ Bỉ. Năm 2024, gói này gồm 600 giờ. Trong những giờ này, bạn sẽ phải trả ít đóng góp xã hội hơn so với một nhân viên tiêu chuẩn. Bạn được phép làm thêm giờ. Tuy nhiên, với mỗi giờ bạn làm việc ngoài gói 600 giờ, bạn phải trả các khoản đóng góp xã hội thông thường.\n\nSinh viên quốc tế có thể làm việc trong thời gian giấy phép cư trú tại Bỉ còn hiệu lực. Trong năm học, bạn có thể làm việc tối đa 20 giờ mỗi tuần. Trong thời gian nghỉ lễ chính thức (kỳ nghỉ đông, xuân hoặc hè), bạn có thể làm việc nhiều hơn 20 giờ mỗi tuần. Bạn không được làm việc khi phải tham gia các lớp học hoặc các hoạt động khác liên quan đến chương trình học của mình. Bạn cũng không được phép làm việc trong mùa hè trước khi bắt đầu năm học đầu tiên tại Bỉ.\n\nSau khi tốt nghiệp, sinh viên quốc tế có thể xin giấy phép năm định hướng và gia hạn thời gian lưu trú tại Bỉ thêm 12 tháng để tìm việc làm hoặc khởi nghiệp kinh doanh riêng.', '/du-hoc-bi', 4, 22, NULL, '2025-02-22 04:46:49'),
(4, 'Du học Đức', 'Du học Đức', 'uploads/94984d720a500c065eb42b407.jpg', NULL, '/du-hoc-duc', 4, 22, NULL, '2025-02-22 04:47:37'),
(5, 'Du học Hà Lan', 'Mô tả ngắn du học Hà Lan', 'uploads/94984d720a500c065eb42b408.jpg', 'Nội dung du học Hà Lan', '/du-hoc-ha-lan', 4, 22, NULL, '2025-02-22 04:47:37'),
(6, 'Du học Pháp', 'Du học Pháp', 'uploads/94984d720a500c065eb42b409.jpg', NULL, '/du-hoc-phap', 4, 22, NULL, '2025-02-22 04:47:37'),
(7, 'Du học Phần Lan', 'Du học Phần Lan', 'uploads/94984d720a500c065eb42b40a.jpg', NULL, '/du-hoc-phan-lan', 4, 22, NULL, '2025-02-22 04:47:37'),
(8, 'Du học Tây Ban Nha', NULL, 'uploads/94984d720a500c065eb42b414.jpg', NULL, '/du-hoc-tay-ban-nha', 4, 22, NULL, '2025-02-22 04:47:37'),
(9, 'Du học Thuỵ Sĩ', NULL, 'uploads/94984d720a500c065eb42b40b.jpg', NULL, '/du-hoc-thuy-si', 4, 22, NULL, '2025-02-22 04:47:37'),
(10, 'Du học Thuỵ Điển', NULL, 'uploads/94984d720a500c065eb42b40c.jpg', NULL, '/du-hoc-thuy-dien', 4, 22, NULL, '2025-02-22 04:49:38'),
(11, 'Du học Canada', NULL, 'uploads/94984d720a500c065eb42b40d.jpg', NULL, '/du-hoc-canada', 4, 23, NULL, '2025-02-22 04:50:54'),
(12, 'Du học Mỹ', NULL, 'uploads/94984d720a500c065eb42b40e.jpg', NULL, '/du-hoc-my', 4, 23, NULL, '2025-02-22 05:33:45'),
(13, 'Du học Malaysia', NULL, 'uploads/94984d720a500c065eb42b40f.jpg', NULL, '/du-hoc-malaysia', 4, 24, NULL, '2025-02-22 05:34:56'),
(14, 'Du học Singapore', NULL, 'uploads/94984d720a500c065eb42b410.jpg', NULL, '/du-hoc-singapore', 4, 24, NULL, '2025-02-22 05:34:56'),
(15, 'Du học Philippines', NULL, 'uploads/94984d720a500c065eb42b411.jpg', NULL, '/du-hoc-philippines', 4, 24, NULL, '2025-02-22 05:36:21'),
(16, 'Du học New Zealand', NULL, 'uploads/94984d720a500c065eb42b412.jpg', NULL, '/du-hoc-new-zealand', 4, 25, NULL, '2025-02-22 05:36:21'),
(17, 'Du học Úc', NULL, 'uploads/94984d720a500c065eb42b413.jpg', NULL, '/du-hoc-uc', 4, 25, NULL, '2025-02-22 05:36:21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Courses`
--

CREATE TABLE `Courses` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `excerpt` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `author` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `levels_id` int(11) DEFAULT NULL,
  `scholarship_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `slug` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `CustomFields`
--

CREATE TABLE `CustomFields` (
  `id` int(11) NOT NULL,
  `post_id` int(11) DEFAULT NULL,
  `input_fields` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Faculties`
--

CREATE TABLE `Faculties` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `excerpt` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `author` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `courses_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `slug` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Feedback`
--

CREATE TABLE `Feedback` (
  `id` int(11) NOT NULL,
  `post_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `FormResponse`
--

CREATE TABLE `FormResponse` (
  `id` int(11) NOT NULL,
  `form_id` int(11) DEFAULT NULL,
  `response` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Forms`
--

CREATE TABLE `Forms` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `author` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Images`
--

CREATE TABLE `Images` (
  `id` int(11) NOT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `related_id` int(11) NOT NULL,
  `related_type` varchar(255) NOT NULL,
  `positions` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Levels`
--

CREATE TABLE `Levels` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Menus`
--

CREATE TABLE `Menus` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `Menus`
--

INSERT INTO `Menus` (`id`, `name`, `path`, `position`) VALUES
(1, 'Country', '/quoc-gia', 0),
(2, 'School', '/truong', 0),
(3, 'Workshop', '/hoi-thao', 0),
(4, 'Scholarship', '/hoc-bong', 0),
(5, 'Course', '/khoa-hoc', 0),
(6, 'News', '/kham-pha-du-hoc', 0),
(7, 'Introduce', '/gioi-thieu-ve-inec', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `News`
--

CREATE TABLE `News` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `author` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Posts`
--

CREATE TABLE `Posts` (
  `id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `taxonomy_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  `author` int(11) DEFAULT NULL,
  `post_types` int(11) DEFAULT NULL,
  `post_status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `PostTypes`
--

CREATE TABLE `PostTypes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `PostTypes`
--

INSERT INTO `PostTypes` (`id`, `name`) VALUES
(1, 'test');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Roles`
--

CREATE TABLE `Roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `Roles`
--

INSERT INTO `Roles` (`id`, `name`) VALUES
(1, 'Admin'),
(2, 'User');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Scholarships`
--

CREATE TABLE `Scholarships` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `excerpt` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  `author` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `levels_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('00-create-categories-table.cjs'),
('01-create-posttypes-table.cjs'),
('02-create-roles-table.cjs'),
('03-create-users-table.cjs'),
('04-create-taxonomy-table.cjs'),
('05-create-posts-table.cjs'),
('06-create-customfields-table.cjs'),
('07-create-comments-table.cjs'),
('08-create-forms-table.cjs'),
('09-create-formResponse-table.cjs'),
('10-create-images-table.cjs'),
('11-create-Cities-table.cjs'),
('12-create-levels-table.cjs'),
('13-create-scholarships-table.cjs'),
('14-create-course-table.cjs'),
('15-create-faculties-table.cjs'),
('16-create-universities.table.cjs'),
('17-create-countries-table.cjs'),
('18-create-tokens-table.cjs'),
('19-create-feedback-table.cjs'),
('20-create-news-table.cjs'),
('20250222040741-add-slug-to-posts.cjs'),
('21-create-menus-table.cjs'),
('22-create-subMenus-table.cjs');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `SubMenus`
--

CREATE TABLE `SubMenus` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `SubMenus`
--

INSERT INTO `SubMenus` (`id`, `name`, `parent_id`, `path`, `position`) VALUES
(41, 'Châu Á', 2, '/chaua', 0),
(42, 'Châu Âu', 2, '/chauau', 1),
(43, 'Châu Mỹ', 2, '/chaumy', 2),
(44, 'Châu Úc', 2, '/chauuc', 3),
(45, 'Các trường tại Anh', 3, '/truongtaianh', 0),
(46, 'Các trường tại Bỉ', 3, '/truongtaibi', 1),
(47, 'Các trường tại Canada', 3, '/truongtaicanada', 2),
(48, 'Các trường tại Đức', 3, '/truongtaiduc', 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Taxonomy`
--

CREATE TABLE `Taxonomy` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `Taxonomy`
--

INSERT INTO `Taxonomy` (`id`, `name`) VALUES
(1, 'Test');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Tokens`
--

CREATE TABLE `Tokens` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `token` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `Tokens`
--

INSERT INTO `Tokens` (`id`, `user_id`, `token`, `createdAt`, `updatedAt`) VALUES
(115, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInVzZXJJZCI6Miwicm9sZUlkIjoyLCJpYXQiOjE3NDA3MTM4NzMsImV4cCI6MTc0MDgwMDI3M30.VfWuepT23cOQxVpqdFmVd0Fi842s9WwleIQbUyIr-Hw', '2025-02-28 10:37:53', '2025-02-28 10:37:53');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Universities`
--

CREATE TABLE `Universities` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `excerpt` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `author` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `cities_id` int(11) DEFAULT NULL,
  `faculties_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `slug` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `Users`
--

INSERT INTO `Users` (`id`, `email`, `password`, `firstName`, `lastName`, `address`, `gender`, `roleId`, `phoneNumber`, `image`, `createdAt`, `updatedAt`) VALUES
(2, 'admin@gmail.com', '$2b$10$NmvoLIww2tl7XovbWKpe1.4Vaa.4ZcI1wvVyz3/w51v5aRbcNt8cy', 'Dương', 'Đặng', 'Hải Phòng', 2, 2, '0981976782', NULL, '2025-02-21 23:37:31', '2025-02-25 18:03:27'),
(3, 'test@example.us', '$2b$10$6loUMpqm4Fdmw1Z96PRQ1.TrdBTrHYLdWxMTqF1iHha7oQzF34qH2', 'Admin', '123', NULL, 2, 2, '6019521325', NULL, '2025-02-21 23:42:56', '2025-02-21 23:42:56'),
(4, 'admin@root', '$2b$10$5BIHKqfoaXRzXXZTX2K3.eeaUtKFRJl1bfu2Vt109O7z4UwUH86A2', 'Đặng', 'Dương', 'Hà Nội', 1, 1, '0981976782', 'uploads/1d92b8dd3e1f9f88ce4944c01.jpg', '2025-02-21 23:45:19', '2025-02-24 23:04:19');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `Cities`
--
ALTER TABLE `Cities`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `Comments`
--
ALTER TABLE `Comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `Countries`
--
ALTER TABLE `Countries`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `author` (`author`),
  ADD KEY `categories_id` (`category_id`),
  ADD KEY `universities_id` (`universities_id`);

--
-- Chỉ mục cho bảng `Courses`
--
ALTER TABLE `Courses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `author` (`author`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `levels_id` (`levels_id`),
  ADD KEY `scholarship_id` (`scholarship_id`);

--
-- Chỉ mục cho bảng `CustomFields`
--
ALTER TABLE `CustomFields`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`);

--
-- Chỉ mục cho bảng `Faculties`
--
ALTER TABLE `Faculties`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `author` (`author`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `courses_id` (`courses_id`);

--
-- Chỉ mục cho bảng `Feedback`
--
ALTER TABLE `Feedback`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`);

--
-- Chỉ mục cho bảng `FormResponse`
--
ALTER TABLE `FormResponse`
  ADD PRIMARY KEY (`id`),
  ADD KEY `form_id` (`form_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `Forms`
--
ALTER TABLE `Forms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author` (`author`);

--
-- Chỉ mục cho bảng `Images`
--
ALTER TABLE `Images`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `Levels`
--
ALTER TABLE `Levels`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `Menus`
--
ALTER TABLE `Menus`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `News`
--
ALTER TABLE `News`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author` (`author`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Chỉ mục cho bảng `Posts`
--
ALTER TABLE `Posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `taxonomy_id` (`taxonomy_id`),
  ADD KEY `author` (`author`),
  ADD KEY `post_types` (`post_types`);

--
-- Chỉ mục cho bảng `PostTypes`
--
ALTER TABLE `PostTypes`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `Scholarships`
--
ALTER TABLE `Scholarships`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `author` (`author`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `levels_id` (`levels_id`);

--
-- Chỉ mục cho bảng `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `SubMenus`
--
ALTER TABLE `SubMenus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `parent_id` (`parent_id`);

--
-- Chỉ mục cho bảng `Taxonomy`
--
ALTER TABLE `Taxonomy`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `Tokens`
--
ALTER TABLE `Tokens`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `Universities`
--
ALTER TABLE `Universities`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `author` (`author`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `cities_id` (`cities_id`),
  ADD KEY `faculties_id` (`faculties_id`);

--
-- Chỉ mục cho bảng `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleId` (`roleId`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `Categories`
--
ALTER TABLE `Categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `Cities`
--
ALTER TABLE `Cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `Comments`
--
ALTER TABLE `Comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `Countries`
--
ALTER TABLE `Countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `Courses`
--
ALTER TABLE `Courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `CustomFields`
--
ALTER TABLE `CustomFields`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `Faculties`
--
ALTER TABLE `Faculties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `Feedback`
--
ALTER TABLE `Feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `FormResponse`
--
ALTER TABLE `FormResponse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `Forms`
--
ALTER TABLE `Forms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `Images`
--
ALTER TABLE `Images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `Levels`
--
ALTER TABLE `Levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `Menus`
--
ALTER TABLE `Menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `News`
--
ALTER TABLE `News`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `Posts`
--
ALTER TABLE `Posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `PostTypes`
--
ALTER TABLE `PostTypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `Roles`
--
ALTER TABLE `Roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `Scholarships`
--
ALTER TABLE `Scholarships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `SubMenus`
--
ALTER TABLE `SubMenus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT cho bảng `Taxonomy`
--
ALTER TABLE `Taxonomy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `Tokens`
--
ALTER TABLE `Tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT cho bảng `Universities`
--
ALTER TABLE `Universities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `Comments`
--
ALTER TABLE `Comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `Posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `Countries`
--
ALTER TABLE `Countries`
  ADD CONSTRAINT `countries_ibfk_1` FOREIGN KEY (`author`) REFERENCES `Users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `countries_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `Categories` (`id`),
  ADD CONSTRAINT `countries_ibfk_3` FOREIGN KEY (`universities_id`) REFERENCES `Universities` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `Courses`
--
ALTER TABLE `Courses`
  ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`author`) REFERENCES `Users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `courses_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `Categories` (`id`),
  ADD CONSTRAINT `courses_ibfk_3` FOREIGN KEY (`levels_id`) REFERENCES `Levels` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `courses_ibfk_4` FOREIGN KEY (`scholarship_id`) REFERENCES `Scholarships` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `CustomFields`
--
ALTER TABLE `CustomFields`
  ADD CONSTRAINT `customfields_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `Posts` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `Faculties`
--
ALTER TABLE `Faculties`
  ADD CONSTRAINT `faculties_ibfk_1` FOREIGN KEY (`author`) REFERENCES `Users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `faculties_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `Categories` (`id`),
  ADD CONSTRAINT `faculties_ibfk_3` FOREIGN KEY (`courses_id`) REFERENCES `Courses` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `Feedback`
--
ALTER TABLE `Feedback`
  ADD CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `Posts` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `FormResponse`
--
ALTER TABLE `FormResponse`
  ADD CONSTRAINT `formresponse_ibfk_1` FOREIGN KEY (`form_id`) REFERENCES `Forms` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `formresponse_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `Forms`
--
ALTER TABLE `Forms`
  ADD CONSTRAINT `forms_ibfk_1` FOREIGN KEY (`author`) REFERENCES `Users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `News`
--
ALTER TABLE `News`
  ADD CONSTRAINT `news_ibfk_1` FOREIGN KEY (`author`) REFERENCES `Users` (`id`),
  ADD CONSTRAINT `news_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `Posts` (`id`),
  ADD CONSTRAINT `news_ibfk_3` FOREIGN KEY (`category_id`) REFERENCES `Categories` (`id`);

--
-- Các ràng buộc cho bảng `Posts`
--
ALTER TABLE `Posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `Categories` (`id`),
  ADD CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`taxonomy_id`) REFERENCES `Taxonomy` (`id`),
  ADD CONSTRAINT `posts_ibfk_3` FOREIGN KEY (`author`) REFERENCES `Users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `posts_ibfk_4` FOREIGN KEY (`post_types`) REFERENCES `PostTypes` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `Scholarships`
--
ALTER TABLE `Scholarships`
  ADD CONSTRAINT `scholarships_ibfk_1` FOREIGN KEY (`author`) REFERENCES `Users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `scholarships_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `Categories` (`id`),
  ADD CONSTRAINT `scholarships_ibfk_3` FOREIGN KEY (`levels_id`) REFERENCES `Levels` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `SubMenus`
--
ALTER TABLE `SubMenus`
  ADD CONSTRAINT `submenus_ibfk_1` FOREIGN KEY (`parent_id`) REFERENCES `Menus` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `Universities`
--
ALTER TABLE `Universities`
  ADD CONSTRAINT `universities_ibfk_1` FOREIGN KEY (`author`) REFERENCES `Users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `universities_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `Categories` (`id`),
  ADD CONSTRAINT `universities_ibfk_3` FOREIGN KEY (`cities_id`) REFERENCES `Cities` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `universities_ibfk_4` FOREIGN KEY (`faculties_id`) REFERENCES `Faculties` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `Roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
