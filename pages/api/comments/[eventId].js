function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (
      !email ||
      email.trim() === '' ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    console.log(newComment);

    res.status(200).json({ message: 'comment sent!', comment: newComment });
  }

  if (req.method === 'GET') {
    const dummyList = [
      {
        id: 'c1',
        name: 'Queen',
        email: 'lucy@mail.com',
        text: 'this looks fun',
      },
      {
        id: 'c2',
        name: 'Heide',
        email: 'fabz@mail.com',
        text: 'this looks booooooooooooring',
      },
    ];

    res.status(200).json({ comments: dummyList });
  }
}

export default handler;