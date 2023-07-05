import Form from './Form'

const App = () => {
    return (
      <div class="text-center p-4 py-5 shadow col col-md-5 border bg-white">
        <h1 class="fw-bold fs-3 text-secondary mb-3">Bakit na bored ang beshy ko?</h1>
        <Form />
      </div>
    );
}

Simply.render(App, "#root");