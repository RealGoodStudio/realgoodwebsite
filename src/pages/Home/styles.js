const styles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
    flexDirection: 'column',
    textAlign: 'center',
    // eslint-disable-next-line quotes
    [`@media(max-width: 800x)`]: {
      width: '75%',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  icon: {
    width: '180px',
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
    color: '#000',
    '&:visited': {
      color: '#000',
    },
  },
};

export default styles;
