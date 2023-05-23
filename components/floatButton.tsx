import { Button } from '@mui/material'
import EditNoteIcon from '@mui/icons-material/EditNote';


export default function floatButtons() {
  return (
    <div className='fixed'>
        <Button startIcon={<EditNoteIcon />} variant='contained'>Enquire Now</Button>
      </div>
  )
}
