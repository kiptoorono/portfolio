import {
  SiPython,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiTableau,
  SiQgis,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGooglemaps,
} from 'react-icons/si';
import { FaLeaf, FaDatabase, FaChartBar } from 'react-icons/fa';
import React from 'react';
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal';

const ICON_SIZE = 50;

const skillsConfig = {
  mainSkills: [
    { id: 'skills-main-python', className: 'skill-icon', icon: <SiPython size={ICON_SIZE} />, text: 'Python' },
    { id: 'skills-main-postgres', className: 'skill-icon', icon: <SiPostgresql size={ICON_SIZE} />, text: 'PostgreSQL' },
    { id: 'skills-main-sql', className: 'skill-icon', icon: <StorageIcon sx={{ fontSize: ICON_SIZE }} />, text: 'SQL' },
    { id: 'skills-main-gis', className: 'skill-icon', icon: <SiQgis size={ICON_SIZE} />, text: 'GIS' },
    { id: 'skills-main-docker', className: 'skill-icon', icon: <SiDocker size={ICON_SIZE} />, text: 'Docker' },
    { id: 'skills-main-git', className: 'skill-icon', icon: <SiGit size={ICON_SIZE} />, text: 'Git' },
  ],
  complementarySkills: [
    { id: 'skills-comp-climate', className: 'skill-icon', icon: <FaLeaf size={ICON_SIZE} />, text: 'Climate Analysis' },
    { id: 'skills-comp-data', className: 'skill-icon', icon: <FaDatabase size={ICON_SIZE} />, text: 'Data Cleaning' },
    { id: 'skills-comp-dashboard', className: 'skill-icon', icon: <FaChartBar size={ICON_SIZE} />, text: 'Dashboards' },
    { id: 'skills-comp-tableau', className: 'skill-icon', icon: <SiTableau size={ICON_SIZE} />, text: 'Tableau' },
    { id: 'skills-comp-javascript', className: 'skill-icon', icon: <SiJavascript size={ICON_SIZE} />, text: 'JavaScript' },
    { id: 'skills-comp-html', className: 'skill-icon', icon: <SiHtml5 size={ICON_SIZE} />, text: 'HTML 5' },
    { id: 'skills-comp-css', className: 'skill-icon', icon: <SiCss3 size={ICON_SIZE} />, text: 'CSS 3' },
    { id: 'skills-comp-bash', className: 'skill-icon', icon: <TerminalIcon sx={{ fontSize: ICON_SIZE }} />, text: 'Bash / Terminal' },
    { id: 'skills-comp-maps', className: 'skill-icon', icon: <SiGooglemaps size={ICON_SIZE} />, text: 'Mapping' },
  ],
};

export default skillsConfig;
