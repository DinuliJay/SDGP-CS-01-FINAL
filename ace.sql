-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2024 at 08:56 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ace`
--

-- --------------------------------------------------------

--
-- Table structure for table `ace`
--

CREATE TABLE `ace` (
  `ID` int(11) NOT NULL,
  `Job Role` text NOT NULL,
  `Question Type` text NOT NULL,
  `Questions` text NOT NULL,
  `Answers` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ace`
--

INSERT INTO `ace` (`ID`, `Job Role`, `Question Type`, `Questions`, `Answers`) VALUES
(1, 'Any', 'Common', 'What is your approach to handling multiple deadlines?\r\n', 'Prioritize tasks based on urgency and impact, use organizational tools to stay on track, break down projects into manageable tasks, manage time effectively, communicate openly with stakeholders\r\n'),
(2, 'Any', 'Common', 'What elements are necessary for a successful team?', 'Clear Communication, Collaboration, Respect and Trust, Adaptability and Flexibility, Effective Leadership\r\n'),
(3, 'Any', 'Common', 'How do you stay up-to-date with the latest trends in technology?', 'Allocate time for self-learning and professional development. This includes online courses, tutorials, and industry publications.Actively participating in industry events, conferences, and meetups allows me to interact with peers, exchange knowledge, and gain insights into emerging technologies and best practices.\r\n'),
(4, 'Any', 'Common', 'What Types of IT Software Are You Most Proficient At?', 'Programming languages like Python and Java, database management systems like MySQL and MongoDB, cloud platforms such as AWS and Azure, DevOps tools like Git and Docker, and data analytics tools like Tableau and Pandas.\r\n'),
(5, 'Any', 'Common', 'Tell me about a time you faced a technical challenge and how you overcame it.\r\n', ''),
(6, 'Backend Developer', 'Not Common', 'Why are you passionate about backend development?\r\n', 'Backend developers get to work on their jobs while spending time in front of the screen and writing codes or looking for errors. So while you will still need to share your work and communicate with others occasionally, you will primarily be working alone without anyone hindering your peace.\r\n'),
(7, 'Backend Developer', 'Not Common', 'Explain the purpose of the backend?\r\n', 'The backend, also known as the server-side, is the software that powers a website or app. It\'s responsible for storing and organizing data, handling user requests, and delivering content to the front end.\r\n'),
(8, 'Backend Developer\r\n', 'Not Common', 'Explain the essence of DRY and DIE principles?\r\n', 'The DRY (Don\'t Repeat Yourself) principle is a software development principle that states that developers should not duplicate code. Duplicated code can lead to maintenance issues because changes need to be made in multiple places. The DIE (Duplication Is Evil) principle is similar to the DRY principle. Still, it takes it one step further by stating that even slight amounts of duplication are inadequate and should be avoided.\r\n'),
(9, 'Backend Developer\r\n', 'Not Common', 'What is the difference between a GET and a POST request?\r\n\r\n', 'A GET request retrieves data from a server, whereas a POST sends data to a server. With a GET request, parameters get passed in the URL. With a POST request, parameters get passed in the request\'s body.\r\n'),
(10, 'Backend Developer\r\n', 'Not Common', 'Explain the differences between SQL and NoSQL databases. When would you use one over the other?\r\n', 'SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL database are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON\r\n'),
(11, 'Front-end Web Development', 'Not Common', 'Explain user-centered design?\r\n', 'User-centered design (UCD) is a process or set of tools used to design a service that focuses on what users need at the very beginning and continues throughout development until launch.\r\n'),
(12, 'Front-end Web Development', 'Not Common', 'What is Progressive Rendering?\r\n\r\n', 'Progressive rendering is a process that is utilized generally to boost the web page\'s rendering content process. \r\n'),
(13, 'Front-end Web Development\r\n', 'Not Common', 'What tools do you use for debugging?\r\n', 'visual Studio Code, Chrome DevTools, ReSharper, PyCharm, Debugger, Xcode, Android Studio \r\n'),
(14, 'Front-end Web Development\r\n', 'Not Common', 'Suggest how we can optimize our front-end page.\r\n', 'The consumption of resources can be reduced by the pages by enhancing the server response,Utilize JavaScript and External CSS instead of internal or in-line,Utilize the framework to ensure the front-end becomes more responsive to different devices,Open-source libraries can be used to manage the browser-specific styling issue.\r\n'),
(15, 'Front-end Web Development', 'Not Common', 'Explain meta tags in HTML?\r\n', 'Meta tags always go inside the head tag of the HTML page,Meta tags are always passed as name/value pairs,Meta tags are not displayed on the page but intended for the browser,Meta tags can contain information about character encoding, description, title of the document ect.\r\n'),
(16, 'Software Engineering ', 'Not Common', 'What is Software Engineering?\r\n', 'Software engineering is The branch of computer science that deals with design, development,testing, and maintenance of software applications. \r\n'),
(17, 'Software Engineering \r\n', 'Not Common', 'What are the characteristics of software?\r\n', 'Usability,Efficiency,Flexibility,Reliability,Maintainability,Integrity\r\n'),
(18, 'Software Engineering \r\n', 'Not Common', 'What is Debugging?\r\n\r\n', 'Debugging is the process of identifying and removing errors from computer hardware or software.\r\n'),
(19, 'Software Engineering \r\n', 'Not Common', 'What is the difference between stack and queue?\r\n', 'Stack follows LIFO while Queue follows FIFO data structure type\r\n'),
(20, 'Software Engineering \r\n', 'Not Common', 'What is a framework?\r\n', 'A framework is a set of programming tools to build well-structured, reliable software and systems.\r\n'),
(21, 'UI/UX Designer\r\n', 'Not Common', 'Can you describe the difference between user interface UI design and UX design?\r\n', 'UI design focuses on the visual elements and interactions. UX design focuses on the user journey and aims to create a meaningful experience for users.\r\n'),
(22, '⁠UI/UX Designer\r\n', 'Not Common', 'What are some common UX design principles?', 'User-centered design, Consistency,  Accessibility, Learnability,  Feedback and responsiveness, Simplicity,  Visual hierarchy\r\n'),
(23, '⁠UI/UX Designer', 'Not Common', 'Can you explain the concept of wireframing and its purpose?\r\n', 'Wireframing involves creating low-fidelity visual representations of a design\'s structure and layout. It outlines the basic skeletal framework of a user interface \r\n'),
(24, 'UI/UX Designer\r\n', 'Not Common', 'What tools do you use for UI/UX design?\r\n', 'Sketch, Adobe XD, Figma, InVision Studio, Axure RP\r\n'),
(25, 'UI/UX Designer\r\n', 'Not Common', 'What is responsive design, and why is it important?\r\n', 'provides an optimal viewing experience across various devices and screen sizes. It enhances user experience, improves accessibility\r\n'),
(26, 'DevOps Engineer\r\n', 'Not Common', 'What benefits does DevOps have in business?\r\n', 'Faster, better product delivery\r\n'),
(27, 'DevOps Engineer\r\n', 'Not Common', 'What are the key components of a successful DevOps workflow?\r\n', 'Continuous Development, Continuous Integration, Continuous Testing, Automated Delivery Pipeline, Configuration Management.\r\n'),
(28, 'DevOps Engineer\r\n', 'Not Common', 'What are the different phases of the DevOps lifecycle?\r\n', 'Plan, Code, Build, Test, Integrate, Deploy, Operate, Monitor.\r\n'),
(29, 'DevOps Engineer\r\n', 'Not Common', 'What are the best programming and scripting languages for DevOps engineers?\r\n', 'Python, Java, JavaScript, Golang, PHP, PERL, Ruby.\r\n'),
(30, 'DevOps Engineer\r\n', 'Not Common', 'What key metrics should you focus on for DevOps success?\r\n', 'Lead time for changes, Change failure rate, Deployment frequency, Mean time to recovery.\r\n'),
(31, 'Quality Assurance Engineer\r\n', 'Not Common', 'What Do You Mean by Monkey Testing and Gorilla Testing?\r\n', 'In gorilla testing a very small number of test cases are selected and run in an exhaustive manner. In monkey testing, the tester tests the application or software by providing some random inputs and checking the behavior of the application or the software. \r\n'),
(32, 'Quality Assurance Engineer\r\n', 'Not Common ', 'Distinguish Between Verification and Validation.\r\n', 'Verification Testing Focuses on whether the software meets its specified requirements, Typically conducted during the development process,  Involves testing with sample data.Validation Testing Focuses on whether the software meets the needs of end-users, Typically conducted after the development process, Involves testing with real-world data.\r\n'),
(33, 'Quality Assurance Engineer\r\n', 'Not Common ', 'Distinguish Between Retesting and Regression Testing?\r\n', 'Retesting is done to make sure that the bug is fixed and whether the failed functionality is working fine or not.Regression Testing is a type of software testing used to verify that modifications in the software or the environment have not caused any unintended adverse side effects. \r\n'),
(34, 'Quality Assurance Engineer\r\n', 'Not Common', 'What is the Difference Between Functional and Non-Functional Testing?\r\n', 'Functional testing is done based on the business requirement while Non- functional testing is done based on the customer expectation and Performance requirement.Functional Testing  is testing the functionality of the software and Non Functional Testing  is testing the performance of the functionality of the software.\r\n'),
(35, 'Quality Assurance Engineer\r\n', 'Not Common', 'What Do You Understand About Bug Leakage and Bug Release?\r\n\r\n', 'A bug leak occurs when the bug is missed in previous builds or versions of the application.A bug release occurs when a specific software version is released with several known bugs or defects. \r\n'),
(36, ' Data Scientist\r\n', 'Not Common ', 'What is Data Science?\r\n', 'The study of data to extract meaningful insights for business.\r\n'),
(37, ' Data Scientist\r\n', 'Not Common ', 'Differentiate between Data Analytics and Data Science\r\n', 'Data analytics tends to focus more on analyzing past data to inform decisions in the present, while data science often involves using data to build models that can predict future outcomes.'),
(38, ' Data Scientist\r\n', 'Not Common', 'Explain the steps in making a decision tree.\r\n', 'Identify the problem, Begin to structure the decision tree, Identify decision alternatives, Estimate payoffs or costs, Assign probabilities, Determine the potential outcomes, Analyze and select the best decision, Review and update.\r\n'),
(39, ' Data Scientist\r\n', 'Not Common', 'Differentiate between univariate, bivariate, and multivariate analysis.\r\n', 'Univariate statistics summarize only one variable at a time. Bivariate statistics compare two variables. Multivariate statistics compare more than two variables.\r\n'),
(40, ' Data Scientist\r\n', 'Not Common', 'What are the assumptions required for a linear regression?\r\n\r\n', 'Linearity, Homoscedasticity, Independence, Normality.\r\n');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ace`
--
ALTER TABLE `ace`
  ADD PRIMARY KEY (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
