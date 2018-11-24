const styles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
    flexDirection: 'column',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    width: '40%'
  },
  button: {
    backgroundColor: '#000',
    borderRadius: '5px',
    color: '#FFFEF2',
    cursor: 'pointer',
    fontSize: '24px',
    padding: '12px 0',
    width: '200px',
  },
  bio: {
    fontSize: '24px',
    fontFamily: 'Gelion-Light',
  },
  bold: {
    fontFamily: 'Gelion',
  },
  link: {
    // textDecoration: 'none',
    '&:visited': {
      color: '#000',
    },
  },
};

export default styles;
