import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function Formulario() {
    return (
        <form>
            <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal" />
            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" />
            <TextField id="CPF" label="CPF" variant="outlined" fullWidth margin="normal" />

            <FormControlLabel
                label="Promoções"
                control={<Switch name="Promoções" defaultChecked color="primary" />}
            />
            <FormControlLabel
                label="Novidades"
                control={<Switch name="Novidades" defaultChecked color="primary" />}
            />

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    );
}

export default Formulario;