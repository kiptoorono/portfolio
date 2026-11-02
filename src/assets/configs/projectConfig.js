import React from 'react';
import { AiFillGithub, AiFillEye } from 'react-icons/ai';

const projectConfig = [
  {
    id: 'project-climate-1',
    title: 'Climate Drivers & Flood Prediction',
    category: { en: 'Climate Data Science & Risk Analysis', es: 'Ciencia de Datos Climáticos y Riesgo' },
    description_i18n: {
      en: 'Analyzed climate and hydrological drivers of flood events in the Tana River Basin using Python, climate indicators, and statistical methods.',
      es: 'Analicé los impulsores climáticos e hidrológicos de eventos de inundación en la cuenca del río Tana usando Python, indicadores climáticos y métodos estadísticos.',
    },
    links: [
      {
        name: 'repo',
        url: 'https://github.com/kiptoorono/Climate-Drivers-Characterization-and-Prediction-of-Flood-Events-in-the-Tana-River-Basin',
        icon: <AiFillGithub />,
      },
    ],
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    target: '_blank',
  },
  {
    id: 'project-climate-2',
    title: 'Climate Risk Assessment System',
    category: { en: 'Climate Data Science & Risk Analysis', es: 'Ciencia de Datos Climáticos y Riesgo' },
    description_i18n: {
      en: 'Built a climate-based risk assessment and support system to evaluate environmental hazards and support decision-making.',
      es: 'Construí un sistema de evaluación de riesgo climático para analizar amenazas ambientales y apoyar la toma de decisiones.',
    },
    links: [
      {
        name: 'repo',
        url: 'https://github.com/kiptoorono/Climate-Based-Risk-Assessment-and-Support-System',
        icon: <AiFillGithub />,
      },
    ],
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978f?auto=format&fit=crop&w=1200&q=80',
    target: '_blank',
  },
  {
    id: 'project-gis-1',
    title: 'Kenya Soil Moisture Analysis',
    category: { en: 'Geospatial Analysis & GIS', es: 'Análisis Geoespacial y GIS' },
    description_i18n: {
      en: 'Processed and visualized soil moisture data in Kenya to assess spatial and temporal variability using geospatial tools and maps.',
      es: 'Procesé y visualicé datos de humedad del suelo en Kenia para evaluar la variabilidad espacial y temporal usando herramientas geoespaciales.',
    },
    links: [
      {
        name: 'repo',
        url: 'https://github.com/kiptoorono/Kenya-soil-moisture-Analysis',
        icon: <AiFillGithub />,
      },
    ],
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d9?auto=format&fit=crop&w=1200&q=80',
    target: '_blank',
  },
  {
    id: 'project-gis-2',
    title: 'Kericho Vegetation Dynamics',
    category: { en: 'Geospatial Analysis & GIS', es: 'Análisis Geoespacial y GIS' },
    description_i18n: {
      en: 'Explored vegetation dynamics using remote-sensing indicators and spatial patterns to monitor land cover change and ecosystem conditions.',
      es: 'Exploré la dinámica de vegetación usando indicadores de teledetección y patrones espaciales para monitorear cambios de cobertura terrestre.',
    },
    links: [
      {
        name: 'repo',
        url: 'https://github.com/kiptoorono/Kericho-Vegetation-Dyamics',
        icon: <AiFillGithub />,
      },
    ],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    target: '_blank',
  },
  {
    id: 'project-bi-1',
    title: 'Supermarket Sales Analysis',
    category: { en: 'Data Analysis and Business Intelligence', es: 'Análisis de Datos e Inteligencia de Negocio' },
    description_i18n: {
      en: 'Performed sales analysis and KPI evaluation to detect patterns, customer behavior, and business opportunities.',
      es: 'Realicé análisis de ventas y evaluación de KPI para detectar patrones, comportamiento del cliente y oportunidades de negocio.',
    },
    links: [
      { name: 'repo', url: 'https://github.com/kiptoorono/project_1', icon: <AiFillGithub /> },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    target: '_blank',
  },
  {
    id: 'project-bi-2',
    title: 'Data Analysis Project',
    category: { en: 'Data Analysis and Business Intelligence', es: 'Análisis de Datos e Inteligencia de Negocio' },
    description_i18n: {
      en: 'Exploratory data analysis project with business and analytical storytelling across multiple datasets.',
      es: 'Proyecto de análisis exploratorio de datos con narrativa analítica y de negocio para múltiples conjuntos de datos.',
    },
    links: [
      { name: 'repo', url: 'https://github.com/kiptoorono/Data-analysis-project', icon: <AiFillGithub /> },
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    target: '_blank',
  },
  {
    id: 'project-automation-1',
    title: 'NDVI & VCI Automation',
    category: { en: 'Automation & Analytical Tools', es: 'Automatización y Herramientas Analíticas' },
    description_i18n: {
      en: 'Automated extraction and processing of vegetation and climate indices for efficient environmental monitoring.',
      es: 'Automatizé la extracción y procesamiento de índices de vegetación y clima para monitoreo ambiental eficiente.',
    },
    links: [
      { name: 'repo', url: 'https://github.com/kiptoorono/NDVI-VCI-automation', icon: <AiFillGithub /> },
    ],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    target: '_blank',
  },
  {
    id: 'project-automation-2',
    title: 'WhatsApp News AI Agent',
    category: { en: 'Automation & Analytical Tools', es: 'Automatización y Herramientas Analíticas' },
    description_i18n: {
      en: 'Built an automated WhatsApp news agent and related workflow tools to streamline information delivery and discovery.',
      es: 'Construí un agente de noticias para WhatsApp y herramientas de automatización para optimizar la entrega y descubrimiento de información.',
    },
    links: [
      { name: 'repo', url: 'https://github.com/kiptoorono/whatsapp-news-ai-agent', icon: <AiFillGithub /> },
    ],
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80',
    target: '_blank',
  },
];

export default projectConfig;
