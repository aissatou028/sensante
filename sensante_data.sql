--
-- PostgreSQL database dump
--

\restrict JR3zc4pQbH4F25Auk6TgFZ1Ctj1l58W6nmQ5RxnKX7jw9g6hJbFbKQO5sbGV4wj

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
-- Name: Role; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."Role" AS ENUM (
    'AGENT',
    'MEDECIN',
    'ADMIN'
);


ALTER TYPE public."Role" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Consultation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Consultation" (
    id integer NOT NULL,
    date timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    symptomes jsonb NOT NULL,
    "diagnosticIa" text,
    confiance double precision,
    statut text DEFAULT 'en_attente'::text NOT NULL,
    notes text,
    "patientId" integer NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public."Consultation" OWNER TO postgres;

--
-- Name: Consultation_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Consultation_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Consultation_id_seq" OWNER TO postgres;

--
-- Name: Consultation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Consultation_id_seq" OWNED BY public."Consultation".id;


--
-- Name: Patient; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Patient" (
    id integer NOT NULL,
    nom text NOT NULL,
    prenom text NOT NULL,
    "dateNaissance" timestamp(3) without time zone NOT NULL,
    sexe text NOT NULL,
    telephone text,
    adresse text,
    region text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Patient" OWNER TO postgres;

--
-- Name: Patient_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Patient_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Patient_id_seq" OWNER TO postgres;

--
-- Name: Patient_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Patient_id_seq" OWNED BY public."Patient".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    nom text NOT NULL,
    prenom text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    role public."Role" DEFAULT 'AGENT'::public."Role" NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_seq" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: Consultation id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Consultation" ALTER COLUMN id SET DEFAULT nextval('public."Consultation_id_seq"'::regclass);


--
-- Name: Patient id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Patient" ALTER COLUMN id SET DEFAULT nextval('public."Patient_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Consultation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Consultation" (id, date, symptomes, "diagnosticIa", confiance, statut, notes, "patientId", "userId") FROM stdin;
1	2026-05-05 23:05:18.879	["Fièvre", "frissons", "maux de tête"]	Le patient présente des symptômes compatibles avec une infection virale ou bactérienne, tels que la malaria ou la dengue, qui sont fréquentes au Sénégal, notamment à Dakar. Les fièvres hémorragiques virales ou d'autres infections comme la typhoïde ne peuvent pas être exclues.	60	termine	\N	3	1
2	2026-05-05 23:05:18.879	["Toux", "douleurs thoraciques", "fatigue"]	Pneumonie ou infection respiratoire, potentiellement liée à la tuberculose ou à une autre infection pulmonaire, compte tenu du contexte sénégalais où la tuberculose est une préoccupation de santé publique. Les symptômes pourraient également être liés à d'autres affections telles que la bronchite ou la grippe.	60	termine	\N	4	1
3	2026-05-05 23:05:18.879	["Diarrhée", "vomissements", "déshydratation"]	Gastro-entérite aiguë, possiblement due à une infection bactérienne ou virale, ou à une intoxication alimentaire. Il est également important de considérer la possibilité de choléra, qui est endémique dans certaines régions du Sénégal, notamment dans la région de Saint-Louis.	80	termine	\N	5	1
\.


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
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, nom, prenom, email, password, role, "createdAt") FROM stdin;
1	Sow	Cheikh Djibril	cheikhdjibrilsow949@gmail.com	$2b$10$BA389JDDgfk4wblLDttnHeRg4WCQwjZbCsL5FqykSi3adKCVQeqfG	AGENT	2026-05-02 01:41:15.134
\.


--
-- Name: Consultation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Consultation_id_seq"', 3, true);


--
-- Name: Patient_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Patient_id_seq"', 12, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 1, true);


--
-- Name: Consultation Consultation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Consultation"
    ADD CONSTRAINT "Consultation_pkey" PRIMARY KEY (id);


--
-- Name: Patient Patient_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Patient"
    ADD CONSTRAINT "Patient_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: Consultation Consultation_patientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Consultation"
    ADD CONSTRAINT "Consultation_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES public."Patient"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Consultation Consultation_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Consultation"
    ADD CONSTRAINT "Consultation_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

\unrestrict JR3zc4pQbH4F25Auk6TgFZ1Ctj1l58W6nmQ5RxnKX7jw9g6hJbFbKQO5sbGV4wj

