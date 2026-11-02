import React from 'react';
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MapIcon from '@mui/icons-material/Map';
import { useLang } from '../utils/i18n';
import { withUtm } from '../utils/withUtm';

const UI = {
  en: {
    h1_a: 'Turn climate and data into ',
    h1_b: 'actionable insight ',
    h1_c: 'for real-world decisions',
    sub: 'I build analytics and geospatial solutions for climate risk, environmental monitoring, business intelligence, and automation workflows.',
    bullets: [
      { icon: <RocketLaunchIcon />, label: 'Climate analytics' },
      { icon: <AutoAwesomeIcon />, label: 'GIS & remote sensing' },
      { icon: <MapIcon />, label: 'Data storytelling' },
    ],
    ctaPrimary: 'View projects',
    ctaSecondary: 'See skills',
    subject: 'Portfolio Inquiry',
  },
  es: {
    h1_a: 'Convierte clima y datos en ',
    h1_b: 'insights accionables ',
    h1_c: 'para decisiones reales',
    sub: 'Creo soluciones analíticas y geoespaciales para riesgo climático, monitoreo ambiental, inteligencia de negocio y automatización.',
    bullets: [
      { icon: <RocketLaunchIcon />, label: 'Analítica climática' },
      { icon: <AutoAwesomeIcon />, label: 'GIS y teledetección' },
      { icon: <MapIcon />, label: 'Narrativa de datos' },
    ],
    ctaPrimary: 'Ver proyectos',
    ctaSecondary: 'Ver habilidades',
    subject: 'Consulta de portafolio',
  },
};

export default function Hero() {
  const [lang] = useLang();
  const t = UI[lang] || UI.en;

  return (
    <Box
      sx={(theme) => ({
        position: 'relative',
        color: '#fff',
        py: { xs: 8, md: 12 },
        background: `radial-gradient(1200px 600px at 20% -10%, ${theme.palette.secondary.main}33, transparent 60%), linear-gradient(180deg, ${theme.palette.primary.main} 0%, #0b1220 60%, #08101a 100%)`,
        overflow: 'hidden',
      })}
    >
      <Box sx={{ position: 'absolute', width: 280, height: 280, right: -80, top: -80, borderRadius: '50%', background: 'radial-gradient(circle, rgba(20,184,166,0.35) 0%, rgba(20,184,166,0) 60%)', filter: 'blur(6px)', pointerEvents: 'none' }} />

      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography variant="h1" sx={{ fontWeight: 900, letterSpacing: -1, lineHeight: 1.1, fontSize: { xs: 36, md: 56 } }}>
            {t.h1_a}
            <Box component="span" sx={{ background: (th) => `linear-gradient(90deg, ${th.palette.secondary.main}, #7dd3fc)`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', textShadow: '0 0 24px rgba(125,211,252,.25)' }}>
              {t.h1_b}
            </Box>
            {t.h1_c}
          </Typography>

          <Typography sx={{ maxWidth: 900, fontSize: { xs: 16, md: 18 }, color: 'rgba(255,255,255,.86)' }}>
            {t.sub}
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems="center" justifyContent="center">
            {t.bullets.map((b, i) => (
              <Chip key={i} icon={b.icon} label={b.label} color="default" sx={{ bgcolor: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', fontWeight: 700 }} />
            ))}
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button component="a" href="/projects" variant="contained" color="secondary" size="large" aria-label={t.ctaPrimary}>
              {t.ctaPrimary}
            </Button>
            <Button component="a" href="/skills" variant="outlined" size="large" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}>
              {t.ctaSecondary}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
