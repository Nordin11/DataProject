
# coding: utf-8

# In[1]:

from pandas_datareader import data
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import json
import io


# In[2]:

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

# Print the FINANCE correlation matrix 
print np.corrcoef(close, rowvar=False)


# In[3]:

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

# Print the TECH correlation matrix
print np.corrcoef(close, rowvar=False)


# In[4]:

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

# Print the SERVICES correlation matrix
print np.corrcoef(close, rowvar=False)


# In[5]:

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

# Print the MATERIALS correlation matrix
print np.corrcoef(close, rowvar=False)


# In[6]:

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

# Print the GOODS correlation matrix
print np.corrcoef(close, rowvar=False)


# In[45]:

## ALL INDUSTRIES

# Call the stocks I want to analyze
financeTickers = ['JPM','BAC','WFC','V','C']
techTickers = ['GOOGL','MSFT','FB','T','VZ']
servicesTickers = ['AMZN','BABA','WMT','HD','CMCSA']
basicTickers = ['XOM','RDS-B','PTR','CVX','BP']
consumerTickers = ['AAPL','PG','BUD','KO','TM']


# group all tickers together
AllTickers = ['JPM','BAC','WFC','V','C','GOOGL','MSFT','FB','T','VZ','AMZN','BABA','WMT','HD','CMCSA','XOM','RDS-B','PTR','CVX','BP','AAPL','PG','BUD','KO','TM']

# Define the data source
data_source = 'yahoo'

# Define the time-scale
start_date = '2000-01-01'
end_date = '2018-01-01'

# Get the data
panel_data = data.DataReader(AllTickers, data_source, start_date, end_date)

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

# Define and print the correlation matrix in absolute values
close = np.corrcoef(close, rowvar=False)
a = np.zeros(len(AllTickers))
for i in range(len(AllTickers)):    
    a[i] = np.sum(abs(close[i]))
        
print a - 1


# In[8]:

## ALL INDUSTRIES

# Call the stocks I want to analyze
financeTickers = ['JPM','BAC','WFC','V','C']
techTickers = ['GOOGL','MSFT','FB','T','VZ']
servicesTickers = ['AMZN','BABA','WMT','HD','CMCSA']
basicTickers = ['XOM','RDS-B','PTR','CVX','BP']
consumerTickers = ['AAPL','PG','BUD','KO','TM']

# group all tickers together
AllTickers = ['JPM','BAC','WFC','V','C','GOOGL','MSFT','FB','T','VZ','AMZN','BABA','WMT','HD','CMCSA','XOM','RDS-B','PTR','CVX','BP','AAPL','PG','BUD','KO','TM']

# Define the data source
data_source = 'yahoo'

# Define the time-scale
start_date = '2000-01-01'
end_date = '2018-01-01'

# Get the data
panel_data = data.DataReader(AllTickers, data_source, start_date, end_date)

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
c = np.corrcoef(close, rowvar=False)

# manipulate the data so that I can output the proper format for the network
nodes = []

# define the different industries by seperating it in different groups 
for i in range(len(AllTickers)):
    if i < len(financeTickers):
    
        nodes.append({"id":AllTickers[i], "group": 1})
    
    elif i < len(financeTickers) + len(techTickers):
        
        nodes.append({"id":AllTickers[i], "group": 2})
        
    elif i < len(financeTickers) + len(techTickers) + len(servicesTickers):
        
        nodes.append({"id":AllTickers[i], "group": 3})
        
    elif i < len(financeTickers) + len(techTickers) + len(servicesTickers) + len(basicTickers):
        
        nodes.append({"id":AllTickers[i], "group": 4})
        
    else:
        
        nodes.append({"id":AllTickers[i], "group": 5})
        
links = []

# Go through the stocks and link the stocks and connections with eachother to the correlation matrix. 
for i in range(len(AllTickers)):
    for j in range(1,len(AllTickers) - i):
        links.append({"source" : AllTickers[i],"target" : AllTickers[i + j],"value" : c[i,i+j]})


# bring together the two dictionaries into one big dict
json_data = {
    "nodes": nodes,
    "links": links
}

network = json.dumps(json_data)

# copied this print into a downloaded json file. 
print network


# In[29]:

## ALL INDUSTRIES

# Call the stocks I want to analyze
financeTickers = ['JPM','BAC','WFC','V','C']
techTickers = ['GOOGL','MSFT','FB','T','VZ']
servicesTickers = ['AMZN','BABA','WMT','HD','CMCSA']
basicTickers = ['XOM','RDS-B','PTR','CVX','BP']
consumerTickers = ['AAPL','PG','BUD','KO','TM']

# group all tickers together
AllTickers = ['JPM','BAC','WFC','V','C','GOOGL','MSFT','FB','T','VZ','AMZN','BABA','WMT','HD','CMCSA','XOM','RDS-B','PTR','CVX','BP','AAPL','PG','BUD','KO','TM']

# Define the data source
data_source = 'yahoo'

# Define the time-scale
start_date = '2000-01-01'
end_date = '2018-01-01'

# Get the data
panel_data = data.DataReader(AllTickers, data_source, start_date, end_date)

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

# normalize de data by defining relative gain. starting at the first price 1.0 
close = close/close.iloc[0, :]

close.to_csv('price_relative_gain.csv',  encoding='utf-8')

