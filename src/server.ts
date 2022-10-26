import app from "./app";
import AppDataSource from "./data-source";

const init = async () => {
    const PORT = process.env.PORT;
    await AppDataSource.initialize();
    app.listen(PORT, () => {
        console.log(`App is running on port ${PORT}`);
    })
}

init();