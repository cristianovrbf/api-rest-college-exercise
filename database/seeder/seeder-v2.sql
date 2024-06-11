-- Insert data into payment_receiver table
insert into payments.payment_receiver (name, max_value, type)
values
('Boleto', 999.90, 'eletrônico'),
('Pix', 9999.90, 'eletrônico'),
('Cartão Crédito (á vista)', 3499.90, 'físico'),
('Cartão Crédito (parcelado)', 1499.90, 'físico'),
('Cartão Débito', 1999.90, 'físico');

-- Insert data into service table
insert into payments.service (description, price, term)
values
('Landing Pages', 999.90, 30),
('API', 4999.90, 60),
('Monolíto', 9999.90, 90);

-- Insert data into service_request table
insert into payments.service_request (request_date, predicted_realize_date, status, service_id, user_id)
values
('2024-06-11', '2024-07-11', 'EM ELABORAÇÃO', 1, 1),
('2024-06-17', '2024-08-17', 'EM ELABORAÇÃO', 2, 1),
('2024-06-24', '2024-09-24', 'EM ELABORAÇÃO', 3, 1),
('2024-05-07', '2024-07-07', 'EM ELABORAÇÃO', 2, 2),
('2024-05-29', '2024-08-29', 'EM ELABORAÇÃO', 3, 3),
('2024-06-14', '2024-07-14', 'EM ELABORAÇÃO', 1, 4);
