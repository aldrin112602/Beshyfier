import Form from './Form'

const App = () => {
    return (
      <div class="text-center p-4 shadow col col-md-5 border bg-light">
        <h1 class="fw-bold fs-3">Bakit na bored ang beshy ko?</h1>
        <Form />
      </div>
    );
}

Simply.render(App, "#root");