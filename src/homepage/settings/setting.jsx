import React from 'react';
import { Grid, Card, CardContent, Box } from '@mui/material';
import Language from './Language';
import Theme from './Theme';
import { useTranslation } from 'react-i18next';



const Setting = () => {

  const { t, i18n } = useTranslation();

  return (
    <Grid container spacing={3} display={'flex'} justifyContent={'center'} alignItems={'center'} mt={2}>
      <Grid item xs={12} sm={8} >
        <Card sx={{ backgroundColor: 'rgba(111,93,165 ,0.1)' }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
            {t('text.language')}
            <Language />
          </CardContent>
        </Card>
      </Grid>
      {/* <Grid item xs={12} sm={8} >
        <Card  sx={{backgroundColor:'rgba(111,93,165 ,0.1)'}}>
          <CardContent sx={{display:'flex' , alignItems:'center' , justifyContent:'space-between',  flexWrap:'wrap' ,gap:'10px'}}>
            Theme
            <Theme/>
          </CardContent>
        </Card>
      </Grid> */}

    </Grid>
  );
};

export default Setting;
