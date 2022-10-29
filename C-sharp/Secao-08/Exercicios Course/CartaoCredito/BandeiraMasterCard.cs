public class BandeiraMasterCard : IBandeira
{
  public void PagarCredito(double valor)
  {
    double minimoValorCredito = 100;

    Console.WriteLine("[BandeiraMasterCard] Iniciando pagamento com MasterCard Crédito...");

    if (valor < minimoValorCredito)
    {
      Console.WriteLine($"[BandeiraMasterCard] O valor de R$ {valor} a ser pago é menor que o mínimo: {minimoValorCredito}");
    }
    else
    {
      Console.WriteLine($"[BandeiraMasterCard] Foi pago R$ {valor} no crédito.");
    }
  }

  public void PagarDebito(double valor)
  {
    Console.WriteLine("[BandeiraMasterCard] Iniciando pagamento com MasterCard Débito...");
    Console.WriteLine($"[BandeiraMasterCard] Foi pago R$ {valor} no Débito.");
  }
}