package com.angularcode.angular.model;

import java.util.Deque;
import java.util.concurrent.ConcurrentLinkedDeque;


public class FileStructure {

	private String title;
	private String path;
	private boolean isLeaf;
	private String link;
	private Deque<FileStructure> children = new ConcurrentLinkedDeque<>();

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public boolean isLeaf() {
		return isLeaf;
	}

	public void setLeaf(boolean isLeaf) {
		this.isLeaf = isLeaf;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public void setChildren(Deque<FileStructure> children) {
		this.children = children;
	}

	public Deque<FileStructure> getChildren() {
		return children;
	}

	@Override
	public String toString() {
		return "{title:'" + title + "', path:'" + path + "', isLeaf:" + isLeaf + ", link:'" + link + "', children:"
				+ children + "}";
	}

}
