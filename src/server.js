const manejandoElSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const nuevoVideo = await response.json();
        console.log('Video agregado:', nuevoVideo);
      } else {
        console.error('Error al agregar el video');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };