--
-- PostgreSQL database dump
--

\restrict pqTwxuhpGaWVJqQda8Jtnl7JJOChJVTa6dawIfzbyQpdv3QNSbn0FaJebhrJMX0

-- Dumped from database version 17.9
-- Dumped by pg_dump version 17.9

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: Patient; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Patient" (id, nom, prenom, "dateNaissance", sexe, telephone, adresse, region, "createdAt") FROM stdin;
1	Sow	Cheikh Djibril	2004-10-16 00:00:00	M	774631303	Pikine	Dakar	2026-05-01 22:16:08.563
2	Ba	Cheikh	2004-10-16 00:00:00	M	774631303	Pikine	Dakar	2026-05-01 22:46:49.702
3	Diallo	Mamadou	1990-01-01 00:00:00	M	771234567	Dakar	Dakar	2026-05-05 21:01:44.451
4	Ndiaye	Fatou	1985-05-15 00:00:00	F	772345678	\N	Ziguinchor	2026-05-05 21:03:25.68
5	Fall	Oumar	2000-03-20 00:00:00	M	773456789	\N	Saint-Louis	2026-05-05 21:04:12.491
6	Aïssatou	Diop	1990-03-15 00:00:00	F	771234567	Thiès	Thiès	2026-05-07 18:48:39.588
7	Moussa	Sarr	1985-07-22 00:00:00	M	782345678	\N	Fatick	2026-05-07 18:49:56.38
8	Ba	Aminata	1995-11-10 00:00:00	F	763456789	\N	Kaolack	2026-05-07 18:50:53.19
9	Niang	Ibrahima	1978-02-05 00:00:00	M	774567890	\N	Louga	2026-05-07 18:51:51.199
10	Faye	Rokhaya	2001-09-18 00:00:00	F	785678901	\N	Diourbel	2026-05-07 18:53:08.003
11	Mbaye	Abdoulaye	1982-04-20 00:00:00	M	766789012	\N	Matam	2026-05-07 18:54:14.614
12	Diallo	Mariama	1993-06-12 00:00:00	F	777890123 	\N	Kolda	2026-05-07 18:55:26.145
\.


--
-- Name: Patient_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Patient_id_seq"', 12, true);


--
-- PostgreSQL database dump complete
--

\unrestrict pqTwxuhpGaWVJqQda8Jtnl7JJOChJVTa6dawIfzbyQpdv3QNSbn0FaJebhrJMX0

