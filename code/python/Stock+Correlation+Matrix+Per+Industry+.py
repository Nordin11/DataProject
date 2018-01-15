
# coding: utf-8

# In[3]:

from pandas_datareader import data
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np


# In[4]:

## FINANCIAL INDUSTRY

# Call the stocks I want to analyze
financeTickers = ['JPM','BAC','WFC','V','C']

# Define the data source
data_source = 'yahoo'

# Define the time-scale
start_date = '2000-01-01'
end_date = '2018-01-01'

# Get the data
panel_data = data.DataReader(financeTickers, data_source, start_date, end_date)

# Getting just the adjusted closing prices. This will return a Pandas DataFrame
# The index in this DataFrame is the major index of the panel_data
close = panel_data.loc['Close']

# Getting all weekdays between 01/01/2000 and 12/31/2016
all_weekdays = pd.date_range(start=start_date, end=end_date, freq='B')

# How do we align the existing prices in adj_close with our new set of dates?
# All we need to do is reindex close using all_weekdays as the new index
close = close.reindex(all_weekdays)

# Drop the dates where one of the companies wasn't public yet
close = close.dropna(axis=0, how='any')

# Define the table as a matrix
close = np.asmatrix(close)

# Print the correlation matrix 
print np.corrcoef(close, rowvar=False)


# In[42]:

## TECH INDUSTRY

# Call the stocks I want to analyze
techTickers = ['GOOGL','MSFT','FB','T','VZ']

# Define the data source
data_source = 'yahoo'

# Define the time-scale
start_date = '2000-01-01'
end_date = '2018-01-01'

# Get the data
panel_data = data.DataReader(techTickers, data_source, start_date, end_date)

# Getting just the adjusted closing prices. This will return a Pandas DataFrame
# The index in this DataFrame is the major index of the panel_data
close = panel_data.loc['Close']

# Getting all weekdays between 01/01/2000 and 12/31/2016
all_weekdays = pd.date_range(start=start_date, end=end_date, freq='B')

# How do we align the existing prices in adj_close with our new set of dates?
# All we need to do is reindex close using all_weekdays as the new index
close = close.reindex(all_weekdays)

# Drop the dates where one of the companies wasn't public yet 
close = close.dropna(axis=0, how='any')

# Define the table as a matrix
close = np.asmatrix(close)

# Print the correlation matrix
print np.corrcoef(close, rowvar=False)


# In[44]:

## SERVICES

# Call the stocks I want to analyze
servicesTickers = ['AMZN','BABA','WMT','HD','CMCSA']

# Define the data source
data_source = 'yahoo'

# Define the time-scale
start_date = '2000-01-01'
end_date = '2018-01-01'

# Get the data
panel_data = data.DataReader(servicesTickers, data_source, start_date, end_date)

# Getting just the adjusted closing prices. This will return a Pandas DataFrame
# The index in this DataFrame is the major index of the panel_data.
close = panel_data.loc['Close']

# Getting all weekdays between 01/01/2000 and 12/31/2016
all_weekdays = pd.date_range(start=start_date, end=end_date, freq='B')

# How do we align the existing prices in adj_close with our new set of dates?
# All we need to do is reindex close using all_weekdays as the new index
close = close.reindex(all_weekdays)

# Drop the dates where one of the companies wasn't public yet 
close = close.dropna(axis=0, how='any')

# Define the table as a matrix
close = np.asmatrix(close)

# Print the correlation matrix
print np.corrcoef(close, rowvar=False)


# In[45]:

## BASIC MATERIALS

# Call the stocks I want to analyze
basicTickers = ['XOM','RDS-B','PTR','CVX','BP']

# Define the data source
data_source = 'yahoo'

# Define the time-scale
start_date = '2000-01-01'
end_date = '2018-01-01'

# Get the data
panel_data = data.DataReader(basicTickers, data_source, start_date, end_date)

# Getting just the adjusted closing prices. This will return a Pandas DataFrame
# The index in this DataFrame is the major index of the panel_data.
close = panel_data.loc['Close']

# Getting all weekdays between 01/01/2000 and 12/31/2016
all_weekdays = pd.date_range(start=start_date, end=end_date, freq='B')

# How do we align the existing prices in adj_close with our new set of dates?
# All we need to do is reindex close using all_weekdays as the new index
close = close.reindex(all_weekdays)

# Drop the dates where one of the companies wasn't public yet 
close = close.dropna(axis=0, how='any')

# Define the table as a matrix
close = np.asmatrix(close)

# Print the correlation matrix
print np.corrcoef(close, rowvar=False)


# In[48]:

## CONSUMER GOODS

# Call the stocks I want to analyze
consumerTickers = ['AAPL','PG','BUD','KO','TM']

# Define the data source
data_source = 'yahoo'

# Define the time-scale
start_date = '2000-01-01'
end_date = '2018-01-01'

# Get the data
panel_data = data.DataReader(consumerTickers, data_source, start_date, end_date)

# Getting just the adjusted closing prices. This will return a Pandas DataFrame
# The index in this DataFrame is the major index of the panel_data.
close = panel_data.loc['Close']

# Getting all weekdays between 01/01/2000 and 12/31/2016
all_weekdays = pd.date_range(start=start_date, end=end_date, freq='B')

# How do we align the existing prices in adj_close with our new set of dates?
# All we need to do is reindex close using all_weekdays as the new index
close = close.reindex(all_weekdays)

# Drop the dates where one of the companies wasn't public yet 
close = close.dropna(axis=0, how='any')

# Define the table as a matrix
close = np.asmatrix(close)

# Print the correlation matrix
print np.corrcoef(close, rowvar=False)


# In[57]:

## ALL INDUSTRIES

# Call the stocks I want to analyze
financeTickers = ['JPM','BAC','WFC','V','C']
techTickers = ['GOOGL','MSFT','FB','T','VZ']
servicesTickers = ['AMZN','BABA','WMT','HD','CMCSA']
basicTickers = ['XOM','RDS-B','PTR','CVX','BP']
consumerTickers = ['AAPL','PG','BUD','KO','TM']

# Define the data source
data_source = 'yahoo'

# Define the time-scale
start_date = '2000-01-01'
end_date = '2018-01-01'

# Get the data
panel_data = data.DataReader(financeTickers + techTickers + servicesTickers + basicTickers + consumerTickers, data_source, start_date, end_date)

# Getting just the adjusted closing prices. This will return a Pandas DataFrame
# The index in this DataFrame is the major index of the panel_data.
close = panel_data.loc['Close']

# Getting all weekdays between 01/01/2000 and 12/31/2016
all_weekdays = pd.date_range(start=start_date, end=end_date, freq='B')

# How do we align the existing prices in adj_close with our new set of dates?
# All we need to do is reindex close using all_weekdays as the new index
close = close.reindex(all_weekdays)

# Drop the dates where one of the companies wasn't public yet 
close = close.dropna(axis=0, how='any')

# Define the table as a matrix
close = np.matrix(close)

# Print the correlation matrix
print np.corrcoef(close, rowvar=False)


# In[7]:

## ALL INDUSTRIES

# Call the stocks I want to analyze
financeTickers = ['JPM','BAC','WFC','V','C']
techTickers = ['GOOGL','MSFT','FB','T','VZ']
servicesTickers = ['AMZN','BABA','WMT','HD','CMCSA']
basicTickers = ['XOM','RDS-B','PTR','CVX','BP']
consumerTickers = ['AAPL','PG','BUD','KO','TM']

# Define the data source
data_source = 'yahoo'

# Define the time-scale
start_date = '2000-01-01'
end_date = '2018-01-01'

# Get the data
panel_data = data.DataReader(financeTickers + techTickers + servicesTickers + basicTickers + consumerTickers, data_source, start_date, end_date)

# Getting just the adjusted closing prices. This will return a Pandas DataFrame
# The index in this DataFrame is the major index of the panel_data.
close = panel_data.loc['Close']

# Getting all weekdays between 01/01/2000 and 12/31/2016
all_weekdays = pd.date_range(start=start_date, end=end_date, freq='B')

# How do we align the existing prices in adj_close with our new set of dates?
# All we need to do is reindex close using all_weekdays as the new index
close = close.reindex(all_weekdays)

# Drop the dates where one of the companies wasn't public yet 
close = close.dropna(axis=0, how='any')

close

# Export the table with price history of every analyzed stock to a csv
close.to_csv('price_history.csv',  encoding='utf-8')

