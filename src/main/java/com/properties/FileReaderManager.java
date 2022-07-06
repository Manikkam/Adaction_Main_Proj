package com.properties;

public class FileReaderManager {
	
	public static FileReaderManager getInstanceFRM() {
		
		FileReaderManager frm = new FileReaderManager();
		
		return frm;	
	}
	
	public ConfigurationReader getInstanceCR() throws Throwable {
		
		ConfigurationReader cr = new ConfigurationReader();
		
		return cr;

}

	private FileReaderManager() {
			
	}
	
}
