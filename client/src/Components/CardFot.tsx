import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';




export default function RecipeReviewCard() {
  

  type Elementos = {
    id: number;
    name: string;
    description: string;
    url: string;
    infoGuardado?: {
      icons: string;
      autor: string;
      fecha: string;
    }
  }

  const documentos: Elementos[] = [
    {
      id: 1,
      name: 'Elemento 1',
      description: 'Descripción del Elemento 1',
      url: 'https://wegotthiscovered.com/wp-content/uploads/2022/09/David-Martinez-CPE.png',
      infoGuardado:{
          icons: 'https://wegotthiscovered.com/wp-content/uploads/2022/09/David-Martinez-CPE.png',
          autor: 'David Martinez',
          fecha: '2022-09-29'
        }
    
    },
    {
      id: 2,
      name: 'Elemento 2',
      description: 'Descripción del Elemento 2',
      url: 'https://www.google.com',
      infoGuardado: {
          icons: 'https://wegotthiscovered.com/wp-content/uploads/2022/09/David-Martinez-CPE.png',
          autor: 'David Martinez',
          fecha: '2022-09-29'
        }
    },
    {
      id: 3,
      name: 'Elemento 3',
      description: 'Descripción del Elemento 3',
      url: 'https://www.google.com'
    },
    {
      id: 4,
      name: 'Elemento 4',
      description: 'Descripción del Elemento 4',
      url: 'https://www.google.com'
    },
    {
      id: 5,
      name: 'Elemento 5',
      description: 'Descripción del Elemento 5',
      url: 'https://www.google.com'
    },
    {
      id: 6,
      name: 'Elemento 6',
      description: 'Descripción del Elemento 6',
      url: 'https://www.google.com'
    },
    {
      id: 7,
      name: 'Elemento 7',
      description: 'Descripción del Elemento 7',
      url: 'https://www.google.com'
    },
    {
      id: 8,
      name: 'Elemento 8',
      description: 'Descripción del Elemento 8',
      url: 'https://www.google.com'
    },
    {
      id: 9,
      name: 'Elemento 9',
      description: 'Descripción del Elemento 9',
      url: 'https://www.google.com'
    },
    {
      id: 10,
      name: 'Elemento 10',
      description: 'Descripción del Elemento 10',
      url: 'https://www.google.com'
    },
    {
      id: 11,
      name: 'Elemento 11',
      description: 'Descripción del Elemento 11',
      url: 'https://www.google.com'
    },
    {
      id: 12,
      name: 'Elemento 12',
      description: 'Descripción del Elemento 12',
      url: 'https://www.google.com'
    },
  ]

  return (
      <div className='flex flex-wrap justify-center'>
    {
      documentos.map((doc: Elementos) => {
        interface ExpandMoreProps extends IconButtonProps {
          expand: boolean;
        }

        const [expanded, setExpanded] = React.useState(false);

        const handleExpandClick = () => {
          setExpanded(!expanded);
        };

        const ExpandMore = styled((props: ExpandMoreProps) => {
          const { expand, ...other } = props;
              return <IconButton {...other} />;
            })(({ theme }) => ({
              marginLeft: 'auto',
              transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
              }),
              variants: [
                {
                  props: ({ expand }) => !expand,
                  style: {
                    transform: 'rotate(0deg)',
                  },
                },
                {
                  props: ({ expand }) => !!expand,
                  style: {
                    transform: 'rotate(180deg)',
                  },
                },
              ],
            }));

        return (
          <Card key={doc.id} className='m-5 w-1/3' > 
            <CardActions disableSpacing className='flex justify-between'>
              <h2>
                {doc.name}
              </h2>
              <div>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton> 
              </div>
                   
            </CardActions>
            <CardContent>
              <img src={doc.url} alt={doc.name} />
            </CardContent>
            
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardHeader
                avatar={(doc.infoGuardado?.icons) ? (
                  <Avatar aria-label="recipe">
                    <img alt="Remy Sharp" src={doc.infoGuardado?.icons} />
                  </Avatar>
                  
                ) : (
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                )}
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={doc.infoGuardado?.autor}
                subheader={doc.infoGuardado?.fecha}
              />
            </Collapse>
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            
          </Card>
        )
      })
    }
    </div>
    
  );
}