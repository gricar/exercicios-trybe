public class BandeiraVisa : IBandeira
{
  public void PagarCredito(double valor)
  {
    double minimoValorCredito = 50;

    Console.WriteLine("[BandeiraVisa] Iniciando pagamento com Visa Crédito...");

    if (valor < minimoValorCredito)
    {
      Console.WriteLine($"[BandeiraVisa] O valor de R$ <ItemGroup>{valor} a ser pago é menor que o mínimo: {minimoValorCredito}");
    }
    else
    {
      Console.WriteLine($"[BandeiraVisa] Foi pago R$ {valor} no crédito.");
    }
  }

  public void PagarDebito(double valor)
  {
    Console.WriteLine("[BandeiraVisa] Iniciando pagamento com Visa Débito...");
    Console.WriteLine($"[BandeiraVisa] Foi pago R$ {valor} no Débito.");
  }
}