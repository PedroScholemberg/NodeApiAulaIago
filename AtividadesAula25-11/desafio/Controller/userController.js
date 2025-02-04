function user
    try {
        const {id} = req.params;
        const result = await getUser();

    } catch (error) {
        res.status(500).json({error: 'erro'});
    }