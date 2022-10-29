BandeiraVisa visa = new();
Cartao myVisaCard = new(visa);

myVisaCard.Pagar("credito", 70);

BandeiraMasterCard masterCard = new();
Cartao myMasterCard = new(masterCard);

myMasterCard.Pagar("credito", 60);
