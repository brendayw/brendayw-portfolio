import { motion } from 'framer-motion';
import { Box, Grid, Typography, Rating, useMediaQuery, useTheme } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useTypewriter } from '../hooks/useTypewritter';

const skills = [
  //Backend 
  { name: 'Java', level: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Spring', level: 4, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: 'Hibernate', level: 3.5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg" },
  { name: 'Maven', level: 3.5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" },
  { name: 'JUnit 5', level: 3.5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg" },
  { name: 'Swagger', level: 3, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg"},

  // JS / Node / Frontend
  //{ name: 'JavaScript', level: 3.5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  //{ name: 'Node.js', level: 3, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: 'React', level: 2.5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: 'Tailwind CSS', level: 3.5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },

  // Databases & Cloud
  { name: 'PostgreSQL', level: 3.5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: 'MySQL', level: 3.5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: 'Supabase', level: 3, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: 'Oracle Cloud', level: 2, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },

  // Tools & Others
  { name: 'Git', level: 4, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: 'GitHub Actions', level: 2.5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
  { name: 'Docker', level: 2, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: 'Postman', level: 3.5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
];

const TechStack = () => {
  const { text: animatedName, cursor } = useTypewriter('stack', {
    delay: 100,
    infinite: false,
  });
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Para desktop: filas de 5
  const filasDesktop = [
    skills.slice(0, 5),
    skills.slice(5, 10),
    skills.slice(10)
  ];
  
  // Para mobile: filas de 2
  const filasMobile = [
    skills.slice(0, 2),
    skills.slice(2, 4),
    skills.slice(4, 6),
    skills.slice(6, 8),
    skills.slice(8, 10),
    skills.slice(10, 12),
    skills.slice(12, 14),
    skills.slice(14, 16),
  ];
  
  const filasAMostrar = isMobile ? filasMobile : filasDesktop;
  
  return (
    <Box sx={{ py: 8, px: 4 }}>
       <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typography align="center" gutterBottom sx={{ fontWeight: 600, fontSize: {xs: 24, sm: 30, }, 
          color: '#BCB4FF', textAlign: { xs: 'center', md: 'left' }, '&:hover': { color: '#CAC426' },
          mb: 4
        }}>
          My tech {animatedName}
          <span className="animate-blink">{cursor}</span>
        </Typography>
      </motion.div>
    
      {filasAMostrar.map((fila, index) => (
        <Grid container spacing={isMobile ? 1 : 2} key={index} sx={{ mb: 1.5, justifyContent: 'center', }}>
          {fila.map((skill, i) => (
            <Grid item xs={4} sm={4} md={2.4} key={skill.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}      
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
              >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: isMobile ? 1.2 : 1.5,
                    p: isMobile ? 1.5 : 2,
                    bgcolor: '#303030',
                    borderRadius: 6,
                    transition: 'all 0.2s',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
                  }}
                >
                  <Box component="img" src={skill.icon} alt={skill.name}
                    sx={{ width: isMobile ? 28 : 38, height: isMobile ? 28 : 38, objectFit: 'contain' }}
                  />

                  <Typography sx={{ color: '#D1D5DB', fontSize: isMobile ? 10 : 12, fontWeight: 600 }}>
                    {skill.name}
                  </Typography>

                  <Rating name={`${skill.name}-rating`} value={skill.level}
                    readOnly precision={0.5} max={5}
                    icon={<StarIcon fontSize="inherit" />}
                    emptyIcon={<StarIcon fontSize="inherit" />}
                    sx={{
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      color: '#CAC426',
                      '& .MuiRating-iconFilled': { color: '#CAC426' },
                      '& .MuiRating-iconEmpty': { borderColor: '#CAC4266c' },
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      ))}
    </Box>
  );
}

export default TechStack;