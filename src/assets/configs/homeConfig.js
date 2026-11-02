import React from 'react';
import { BsClipboardData } from 'react-icons/bs';
import { FaMapMarkedAlt, FaChartLine, FaRobot } from 'react-icons/fa';
import { GiWaterDrop } from 'react-icons/gi';

const homeConfig = {
  greeting_i18n: {
    en: (
      <h1 className="heading">
        Hi! I’m <strong className="main-name">Kiptoo Rono</strong>
      </h1>
    ),
    es: (
      <h1 className="heading">
        ¡Hola! Soy <strong className="main-name">Kiptoo Rono</strong>
      </h1>
    ),
  },

  titles_i18n: {
    en: [
      'Climate Data Scientist',
      'Geospatial Analyst',
      'Data Analyst',
      'Automation Specialist',
      'Research Analyst',
      'GIS & Risk Analyst',
    ],
    es: [
      'Científico de Datos Climáticos',
      'Analista Geoespacial',
      'Analista de Datos',
      'Especialista en Automatización',
      'Analista de Investigación',
      'Analista GIS y Riesgos',
    ],
  },

  about_i18n: {
    en: {
      start:
        'I work at the intersection of climate science, geospatial analysis, business intelligence, and automation. I build data-driven solutions for environmental risk, decision support, and operational efficiency.',
      exit:
        'My portfolio spans Python, GIS, climate analytics, dashboarding, research workflows, and analytical automation tools.',
    },
    es: {
      start:
        'Trabajo en la intersección entre ciencia del clima, análisis geoespacial, inteligencia de negocio y automatización. Construyo soluciones basadas en datos para riesgo ambiental, apoyo a decisiones y eficiencia operativa.',
      exit:
        'Mi portafolio incluye Python, GIS, análisis climático, dashboards, flujos de investigación y herramientas analíticas automatizadas.',
    },
  },

  workTimeline: [
    {
      id: 'work-4',
      title: 'Climate & Environmental Data Analyst',
      title_i18n: { en: 'Climate & Environmental Data Analyst', es: 'Analista de Datos Ambientales' },
      company: 'Research & Personal Projects',
      description_i18n: {
        en: 'Developed climate risk assessments, environmental monitoring workflows, and analytical pipelines for evidence-based insights.',
        es: 'Desarrollé evaluaciones de riesgo climático, flujos de monitoreo ambiental y pipelines analíticos para insights basados en evidencia.',
      },
      date: '2023-Present',
      icon: <GiWaterDrop />,
      tags: ['climate', 'risk-analysis', 'python', 'environmental-data'],
    },
    {
      id: 'work-3',
      title: 'Geospatial & GIS Analyst',
      title_i18n: { en: 'Geospatial & GIS Analyst', es: 'Analista Geoespacial y GIS' },
      company: 'Environmental Research Projects',
      description_i18n: {
        en: 'Worked with spatial data, remote sensing patterns, and vegetation indicators to understand land and climate dynamics.',
        es: 'Trabajé con datos espaciales, patrones de teledetección e indicadores de vegetación para entender dinámicas de tierra y clima.',
      },
      date: '2022-Present',
      icon: <FaMapMarkedAlt />,
      tags: ['gis', 'folium', 'ndvi', 'remote-sensing', 'maps'],
    },
    {
      id: 'work-2',
      title: 'Data Analyst & BI Specialist',
      title_i18n: { en: 'Data Analyst & BI Specialist', es: 'Analista de Datos y BI' },
      company: 'Project Work',
      description_i18n: {
        en: 'Explored datasets, built dashboards, and translated findings into actionable business and research insights.',
        es: 'Exploré datasets, construí dashboards y traduje hallazgos en insights accionables para negocio e investigación.',
      },
      date: '2021-Present',
      icon: <FaChartLine />,
      tags: ['dashboard', 'analysis', 'kpis', 'visualization'],
    },
    {
      id: 'work-1',
      title: 'Automation & Analytical Tool Builder',
      title_i18n: { en: 'Automation & Analytical Tool Builder', es: 'Constructor de Herramientas Analíticas' },
      company: 'Automation Projects',
      description_i18n: {
        en: 'Created scripts and utilities for scraping, data collection, workflow automation, and analytical processing.',
        es: 'Creé scripts y utilidades para web scraping, recolección de datos, automatización de flujos y procesamiento analítico.',
      },
      date: '2020-Present',
      icon: <FaRobot />,
      tags: ['automation', 'scraping', 'python', 'workflow', 'tools'],
    },
    {
      id: 'work-0',
      title: 'Research & Data Storytelling',
      title_i18n: { en: 'Research & Data Storytelling', es: 'Investigación y Narrativa de Datos' },
      company: 'Academic & Personal Projects',
      description_i18n: {
        en: 'Turned raw data into clear analyses, visual narratives, and decision-support outputs across multiple domains.',
        es: 'Convertí datos crudos en análisis claros, narrativas visuales y salidas de apoyo a decisiones en múltiples dominios.',
      },
      date: '2019-Present',
      icon: <BsClipboardData />,
      tags: ['research', 'storytelling', 'analysis', 'visualization'],
    },
  ],
};

export default homeConfig;
