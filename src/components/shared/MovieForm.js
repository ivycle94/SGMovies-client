import { Form, Container, Button } from 'react-bootstrap'

const MovieForm = (props) => {
    
    const {movie, handleChange, handleSubmit} = props

    return (
        <Container className="justify-content-center">
            <Form onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    placeholder="Movie Name"
                    value={movie.name}
                    name='name'
                    onChange={handleChange}
                />
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    placeholder="Movie Description"
                    value={movie.description}
                    name='description'
                    onChange={handleChange}
                />
                <Form.Label>Release Year</Form.Label>
                <Form.Control 
                    placeholder="Movie Release Year"
                    value={movie.year}
                    type="number"
                    name='year'
                    onChange={handleChange}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default MovieForm