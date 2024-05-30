
-- Insert data into payment_receiver table
insert into payments.payment_receiver (name, max_value, type)
values
('Boleto', 999.90, 'eletrônico'),
('Pix', 9999.90, 'eletrônico'),
('Cartão Crédito (á vista)', 3499.90, 'físico'),
('Cartão Crédito (parcelado)', 1499.90, 'físico'),
('Cartão Débito', 1999.90, 'físico');
