import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CloudUpload} from "@mui/icons-material"
import { Button,FormControl ,InputLabel, MenuItem, Select, TextField, Typography, Checkbox, FormGroup, FormControlLabel, FormLabel, RadioGroup, Radio, Fab, styled, Grid, Divider } from '@mui/material';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function App() {
  const proffesions = [
    'Программист',
    'Тестировщик',
    'Аналитик'
  ];

  return (
    <>
      <Typography variant='h1' component="h1">Форма</Typography>
      <br />
      <form action="" encType="multipart/form-data">
        <TextField label="ФИО" variant='outlined' color='primary'/> <br /> <br />
        <TextField label="Почта" variant='outlined' color='primary'/> <br /><br />
        <TextField label="Пароль для ЛК" variant='outlined' color='primary' type='password'/> <br /><br />
        <TextField label="Биография" variant='outlined' color='primary' rows="5" multiline/> <br /><br />
        <FormControl fullWidth>
          <InputLabel>Желаемая вакансия</InputLabel>
        <Select label="Желаемая вакансия" >
          {proffesions.map((pr,ind)=>
            <MenuItem value={ind}>{pr}</MenuItem>
          )}
        </Select> <br />
        </FormControl>
        <FormGroup>
          <InputLabel>Владение языками</InputLabel>
          <FormControlLabel control={<Checkbox/>} label="C#"/>
          <FormControlLabel control={<Checkbox/>} label="C++"/>
          <FormControlLabel control={<Checkbox/>} label="JavaScript"/>
        </FormGroup> <br />
        <FormControl>
          <FormLabel>Дополнительный навык:</FormLabel>
          <RadioGroup>
            <FormControlLabel value="0" control={<Radio/>} label="Владение иностранным языком"/>
            <FormControlLabel value="1" control={<Radio/>} label="Безошибочность"/>
            <FormControlLabel value="2" control={<Radio/>} label="Коммуникативность"/>
          </RadioGroup>
        </FormControl>
        <br /><br />
        <Button
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<CloudUpload/>}
>
  Upload files
  <VisuallyHiddenInput
    type="file"
    onChange={(event) => console.log(event.target.files)}
    multiple
  />
</Button>
<Divider sx={{my: 3}}/>
          <Grid container spacing={2}>
              <Button color='warning' variant='outlined'>Очистить форму</Button>
              <Button variant='contained'>Отправить</Button>
          </Grid>
        <br/><br/>
        <input type="hidden" name="something" value="Скрытое значение"/>
    </form>
        
    </>
  )
}

export default App
