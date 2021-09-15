import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
  biz_job: {
    position: 'relative'
  },
  bg_img: {
    position: 'absolute',
    width: "100%",
    height: '100vh',
    top: '0',
    left: '0',
  },
  form_section : {
    
    background: '#fff',
    border: '10px',
    boxShadow: '0 1px 4px hsl(0deg 0% 0% / 9%), 0 3px 8px hsl(0deg 0% 0% / 9%), 0 4px 13px hsl(0deg 0% 0% / 13%)',
    position: 'absolute',
    width: '80%',
    height: '80vh',
    top: '0',
    left:'0',
    transform: 'translate(13%, 14%)',
    overflow: 'hidden',
    borderRadius: '10px',

  }
  
}));
