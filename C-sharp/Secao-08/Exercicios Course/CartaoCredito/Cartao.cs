public class Cartao
{
  private IBandeira _bandeira;

  public Cartao(IBandeira bandeira)
  {
    _bandeira = bandeira;
  }

  public void Pagar(string metodo, double valor)
  {
    switch (metodo.ToLower())
    {
      case "debito":
        _bandeira.PagarDebito(valor);
        break;
      case "credito":
        _bandeira.PagarCredito(valor);
        break;
      default: throw new ArgumentException("Método inválido!");
    }
  }
}