import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    try {
        const response = {
            email: "agadaakogwubenedict@gmail.com",
            current_date_time: new Date().toISOString(),
            github_url: "",
        };
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({ error: 'internal server error' })
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

